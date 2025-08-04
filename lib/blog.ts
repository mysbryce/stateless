import fs from "fs"
import path from "path"
import matter from "gray-matter"
import readingTime from "reading-time"

const blogsDirectory = path.join(process.cwd(), 'blogs')

export interface BlogPost {
    slug: string
    title: string
    date: string
    excerpt?: string
    content: string
    readingTime: string
    category: string
}

function getAllMdxFiles(dir: string, fileList: string[] = []): string[] {
    const files = fs.readdirSync(dir)

    files.forEach(file => {
        const filePath = path.join(dir, file)
        const stat = fs.statSync(filePath)

        if (stat.isDirectory()) {
            getAllMdxFiles(filePath, fileList)
        } else if (file.endsWith('.mdx')) {
            fileList.push(filePath)
        }
    })

    return fileList
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
    const mdxFiles = getAllMdxFiles(blogsDirectory)

    const posts = mdxFiles.map(filePath => {
        const fileContents = fs.readFileSync(filePath, 'utf8')
        const { data, content } = matter(fileContents)

        const fileName = path.basename(filePath, '.mdx')

        const relativePath = path.relative(blogsDirectory, filePath)
        const category = path.dirname(relativePath)

        return {
            slug: fileName,
            title: data.title || fileName,
            date: data.date || new Date().toISOString(),
            excerpt: data.excerpt || '',
            content,
            readingTime: readingTime(content).text,
            category: category === '.' ? 'general' : category
        }
    })

    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
    const mdxFiles = getAllMdxFiles(blogsDirectory)

    const targetFile = mdxFiles.find(filePath => {
        const fileName = path.basename(filePath, '.mdx')
        return fileName === slug
    })

    if (!targetFile) {
        return null
    }

    const fileContents = fs.readFileSync(targetFile, 'utf8')
    const { data, content } = matter(fileContents)

    const relativePath = path.relative(blogsDirectory, targetFile)
    const category = path.dirname(relativePath)

    return {
        slug,
        title: data.title || slug,
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt || '',
        content,
        readingTime: readingTime(content).text,
        category: category === '.' ? 'general' : category
    }
}

export async function getAllBlogSlugs(): Promise<string[]> {
    const mdxFiles = getAllMdxFiles(blogsDirectory)

    return mdxFiles.map(filePath => {
        return path.basename(filePath, '.mdx')
    })
}