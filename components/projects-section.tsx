"use client"

import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { Project } from "@/types/project"
import { ProjectCard } from "@/components/project-card"
import { Code } from 'lucide-react'
import { Skeleton } from "@/components/ui/skeleton"

export function ProjectsSection() {
    const [projects, setProjects] = useState<Project[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function fetchProjects() {
            try {
                setLoading(true)
                const projectsCollection = collection(db, "projects")
                const projectsSnapshot = await getDocs(projectsCollection)
                const projectsList = projectsSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })) as Project[]

                setProjects(projectsList)
                setError(null)
            } catch (err) {
                console.error("Error fetching projects:", err)
                setError("There's something went wrong while fetching projects!")
            } finally {
                setLoading(false)
            }
        }

        fetchProjects()
    }, [])

    return (
        <section id="projects" className="py-20 border-b border-zinc-800">
            <div className="container mx-auto px-4">
                <div className="flex items-center gap-2 mb-12">
                    <Code className="h-6 w-6 text-purple-500" />
                    <h2 className="text-3xl font-bold">Projects</h2>
                </div>

                {error && (
                    <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-4 rounded-lg mb-6">
                        {error}
                    </div>
                )}

                {loading ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
                                <Skeleton className="aspect-video w-full" />
                                <div className="p-6 space-y-4">
                                    <div className="flex justify-between">
                                        <Skeleton className="h-6 w-32" />
                                        <Skeleton className="h-5 w-16" />
                                    </div>
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-full" />
                                    <div className="flex gap-2">
                                        {[1, 2, 3].map((j) => (
                                            <Skeleton key={j} className="h-5 w-16" />
                                        ))}
                                    </div>
                                    <div className="flex gap-2 pt-2">
                                        <Skeleton className="h-8 w-24" />
                                        <Skeleton className="h-8 w-24" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {projects.length > 0 ? (
                                projects.map((project) => (
                                    <ProjectCard key={project.id} project={project} />
                                ))
                            ) : (
                                <div className="col-span-3 text-center py-12 text-zinc-400">
                                    No project here
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </section>
    )
}
