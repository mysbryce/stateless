import Link from "next/link"
import { getAllBlogPosts } from "@/lib/blog"

export default async function BlogsPage() {
    const posts = await getAllBlogPosts()

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>

            <div className="grid gap-6">
                {posts.map(post => (
                    <article key={post.slug} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                        <div className="mb-2">
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                                {post.category}
                            </span>
                        </div>

                        <h2 className="text-2xl font-semibold mb-2">
                            <Link
                                href={`/blogs/${post.slug}`}
                                className="hover:text-blue-600 transition-colors"
                            >
                                {post.title}
                            </Link>
                        </h2>

                        {post.excerpt && (
                            <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        )}

                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <time dateTime={post.date}>
                                {new Date(post.date).toLocaleDateString('th-TH')}
                            </time>
                            <span>{post.readingTime}</span>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}
