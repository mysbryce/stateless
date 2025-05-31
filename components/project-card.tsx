import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import Image from "next/image"
import type { Project } from "@/types/project"
import Link from "next/link"

interface ProjectCardProps {
    project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Card className="bg-zinc-900 border-zinc-800 relative overflow-hidden rounded-xl">
            <div className="absolute z-0 inset-0 h-full w-full rounded-xl bg-zinc-900 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="aspect-video relative z-10 m-2 p-2 bg-black/50 rounded-xl">
                <Image
                    src={project.thumbnail || `/placeholder.svg?height=200&width=400&text=${project.name}`}
                    alt={project.name}
                    width={400}
                    height={200}
                    className="object-cover w-full h-full rounded-xl"
                />
            </div>
            <CardContent className="p-6 relative z-10">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{project.name}</h3>
                    <div className="text-xs bg-zinc-800 px-2 py-1 rounded">{project.type}</div>
                </div>
                <p className="text-zinc-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                        <span key={index} className="text-xs bg-zinc-800 px-2 py-1 rounded">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex gap-2">
                    {project.livePreviewUrl && (
                        <Button variant="outline" size="sm" className="border-zinc-700 hover:bg-zinc-800 rounded-xl">
                            <Link href={project.livePreviewUrl} target="_blank">
                                Live Preview
                            </Link>
                        </Button>
                    )}
                    {project.githubUrl && (
                        <Button variant="outline" size="sm" className="border-zinc-700 hover:bg-zinc-800 rounded-xl">
                            <Link href={project.githubUrl} target="_blank" className="flex items-center gap-1">
                                <Github className="h-4 w-4 mr-1" /> Source Code
                            </Link>
                        </Button>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}
