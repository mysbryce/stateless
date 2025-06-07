import Experience from "@/components/experience"
import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Playlist from "@/components/playlist"
import Projects from "@/components/projects"

export default function Home() {
    return (
        <main className="flex flex-col w-[900px] max-w-[80vw] mx-auto pt-6 pb-10">
            <Navbar />
            <Hero />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">
                <Experience />
                <Playlist />
            </div>

            <div className="divider my-14 text-zinc-500">My Projects</div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Projects />
            </div>

            <footer className="mt-12 text-center text-sm text-zinc-400">
                <p>
                    &copy; Made by <span className="text-zinc-800 underline">999s</span> 🚀, Don't let history repeat itself <span className="text-rose-400">:/3</span>
                </p>
            </footer>
        </main>
    )
}