import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism"

import Image from "next/image"
import Link from "next/link"

// Custom Image component
function CustomImage(props: any) {
    return (
        <div className="my-8">
            <Image
                {...props}
                width={800}
                height={400}
                className="rounded-lg shadow-lg"
                alt={props.alt || ''}
            />
        </div>
    )
}

// Custom Link component
function CustomLink(props: any) {
    const href = props.href

    if (href.startsWith('/')) {
        return (
            <Link href={href} {...props}>
                {props.children}
            </Link>
        )
    }

    if (href.startsWith('#')) {
        return <a {...props} />
    }

    return <a target="_blank" rel="noopener noreferrer" {...props} />
}

// Custom Code Block
function CustomCode({ children, className, ...props }: any) {
    const language = children.props.className?.replace('language-', '')

    return (
        <SyntaxHighlighter
            language={language}
            style={atomDark}
            showLineNumbers={true}
        >
            {children.props.children}
        </SyntaxHighlighter>
    )
}

// Custom Quote
function CustomBlockquote({ children }: any) {
    return (
        <blockquote className="border-l-4 border-blue-500 bg-blue-50 p-4 my-6 italic">
            {children}
        </blockquote>
    )
}

// Custom Table
function CustomTable({ children }: any) {
    return (
        <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
                {children}
            </table>
        </div>
    )
}

export const MDXComponents = {
    // Override default HTML elements
    img: CustomImage,
    a: CustomLink,
    pre: CustomCode,
    blockquote: CustomBlockquote,
    table: CustomTable,

    // Custom components ที่สามารถใช้ใน MDX
    Image: CustomImage,

    // Alert component
    Alert: ({ type = 'info', children }: { type?: 'info' | 'warning' | 'error' | 'success', children: React.ReactNode }) => {
        const colors = {
            info: 'bg-blue-50 border-blue-200 text-blue-800',
            warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
            error: 'bg-red-50 border-red-200 text-red-800',
            success: 'bg-green-50 border-green-200 text-green-800'
        }

        return (
            <div className={`border-l-4 px-4 py-1 my-6 ${colors[type]}`}>
                {children}
            </div>
        )
    },

    // Callout component
    Callout: ({ emoji = '💡', children }: { emoji?: string, children: React.ReactNode }) => (
        <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-1 my-6">
            <div className="flex items-center gap-3">
                <span className="text-2xl">{emoji}</span>
                <div className="flex-1">{children}</div>
            </div>
        </div>
    )
}