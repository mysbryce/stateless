import type { NextConfig } from "next"
import _withMDX from "@next/mdx"

const withMDX = _withMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: []
  }
})

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*'
      }
    ]
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx']
}

export default withMDX(nextConfig)
