import { notFound } from 'next/navigation'
import { getBlogPost, getAllBlogSlugs } from '@/lib/blog'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { MDXComponents } from '@/components/mdx-components'

interface BlogPageProps {
    params: Promise<{
        slug: string
    }>
}

export async function generateStaticParams() {
    const slugs = await getAllBlogSlugs()

    return slugs.map(slug => ({
        slug,
    }))
}

export default async function BlogPage({ params }: BlogPageProps) {
    const { slug } = await params
    const post = await getBlogPost(slug)

    if (!post) {
        notFound()
    }

    return (
        <article className="max-w-4xl mx-auto px-4 py-8">
            <header className="mb-8">
                <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                <div className="flex items-center gap-4 text-base-content">
                    <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('th-TH')}
                    </time>
                    <span>{post.readingTime}</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                        {post.category}
                    </span>
                </div>
            </header>

            <div className="prose prose-lg prose-blue max-w-none">
                <MDXRemote
                    source={post.content}
                    components={MDXComponents}
                />
            </div>
        </article>
    )
}