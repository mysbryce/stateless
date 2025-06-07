"use client"

import { collection, getDocs } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { useEffect, useState } from "react"
import { Project } from "@/types/project"
import Image from "next/image"

export default function Projects() {
    const [projects, setProjects] = useState<Project[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const colors: { bg: string, text: string }[] = [
        { bg: 'bg-black', text: 'text-white' },
    ]

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
        <>
            {loading ? (
                [1, 2, 3].map((_, index) => (
                    <div key={index} className="skeleton w-full h-[200px]"></div>
                ))
            ) : (
                projects.map((project, index) => (
                    <div key={index} className="group flex bg-base-200 flex-col relative overflow-hidden border-3 border-white shadow-md rounded-2xl">
                        <div className="relative p-2">
                            <span className="px-2 py-1 rounded-xl text-xs absolute top-4 right-4 bg-white/10 backdrop-blur text-white font-medium uppercase">{project.type}</span>
                            <Image src={project.thumbnail} className="rounded-xl" alt={`${project.name} Thumbnail`} width={1920} height={1080} quality={100} priority />
                        </div>
                        <div className="w-full p-4 mt-auto border-t border-t-zinc-200">
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5}><path d="m17 7.83l1.697 1.526c1.542 1.389 2.313 2.083 2.313 2.974c0 .89-.771 1.585-2.314 2.973L17 16.83"></path><path d="m13.987 5l-3.974 14.83" opacity={0.5}></path><path d="M7 7.83L5.304 9.356C3.76 10.745 2.99 11.44 2.99 12.33s.771 1.585 2.314 2.973L7 16.83"></path></g></svg>
                                <h1 className="font-semibold text-sm text-zinc-700">{project.name}</h1>
                            </div>
                            <div className="flex flex-wrap items-center gap-1 mt-2 mb-4">
                                {project.tags.map((tag, tIndex) => {
                                    const targetIndex = Math.floor(Math.random() * colors.length)
                                    const color = colors[targetIndex]

                                    return (
                                        <span key={tIndex} className={`uppercase text-xs px-2 py-0.5 rounded-xl ${color.bg} ${color.text}`}>{tag}</span>
                                    )
                                })}
                            </div>
                            <p className="text-xs mt-2 text-zinc-600">
                                {project.description}
                            </p>
                        </div>

                        <div className="flex items-center gap-1 md:bg-gradient-to-t md:from-black/70 md:to-transparent p-4 transition-all duration-300 md:absolute md:left-0 md:right-0 md:opacity-0 md:invisible md:-bottom-10 md:group-hover:opacity-100 md:group-hover:visible md:group-hover:bottom-0">
                            <button className="btn btn-sm rounded-2xl shadow-none" onClick={() => window.open(project.livePreviewUrl as string, '_blank')?.focus()}>
                                Live Preview
                            </button>
                            
                            {project.githubUrl !== null && (
                                <button className="btn btn-sm rounded-2xl shadow-none" onClick={() => window.open(project.githubUrl as string, '_blank')?.focus()}>
                                    Github
                                </button>
                            )}
                        </div>
                    </div>
                ))
            )}
        </>
    )
}