export interface Project {
    id: string
    thumbnail: string
    name: string
    type: string
    description: string
    tags: string[]
    livePreviewUrl: string | null
    githubUrl: string | null
}