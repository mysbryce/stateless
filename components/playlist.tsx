import Image from "next/image";

export default function Playlist() {
    const albumCoverSize = 160
    const firstOffset = albumCoverSize + 50
    const secondOffset = firstOffset + 100

    return (
        <div className="flex flex-col gap-4 relative border-3 border-white rounded-3xl shadow-md">
            <span className="absolute -top-4 -left-6 text-zinc-700 bg-white rounded-2xl z-10 text-sm px-3 py-1 shadow-md font-medium">
                My Playlist
            </span>

            <div className="flex items-center justify-center w-full h-[250px] md:h-[70%] relative overflow-hidden">
                <Image src="/playlist/chris-brown-1111.jpg" style={{ marginLeft: `-${secondOffset}px` }} className="absolute -mb-16 -rotate-12 rounded-3xl border-3 border-white shadow-md z-[3]" alt="Chris Brown 11:11 Album Cover" width={albumCoverSize} height={albumCoverSize} />
                <Image src="/playlist/chris-brown-breezy.jpg" style={{ marginLeft: `-${firstOffset}px` }} className="absolute -mb-8 -rotate-6 rounded-3xl border-3 border-white shadow-md z-[4]" alt="Chris Brown Breezy Album Cover" width={albumCoverSize} height={albumCoverSize} />
                <Image src="/playlist/chris-brown-exclusive.jpg" className="absolute rounded-3xl border-3 border-white shadow-md z-[5]" alt="Chris Brown Exclusive Album Cover" width={albumCoverSize} height={albumCoverSize} />
                <Image src="/playlist/chris-brown-fame.jpg" style={{ marginRight: `-${firstOffset}px` }} className="absolute -mb-8 rotate-6 rounded-3xl border-3 border-white shadow-md z-[4]" alt="Chris Brown Fame Album Cover" width={albumCoverSize} height={albumCoverSize} />
                <Image src="/playlist/chris-brown-fortune.jpg" style={{ marginRight: `-${secondOffset}px` }} className="absolute -mb-16 rotate-12 rounded-3xl border-3 border-white shadow-md z-[3]" alt="Chris Brown Fortune Album Cover" width={albumCoverSize} height={albumCoverSize} />
            </div>

            <div className="flex flex-col items-center justify-center mt-3 mb-3">
                <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="currentColor" d="M12 13.535V3h8v2h-6v12a4 4 0 1 1-2-3.465M10 19a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></path></svg>
                    <h2 className="text-lg font-medium">
                        Sex Every Morning
                    </h2>
                </div>

                <a href="https://open.spotify.com/playlist/5KJdkGB68plMhdX41ZEbAW?si=850298b76d204a8a" target="_blank" className="text-orange-800 hover:underline font-medium text-sm mt-2">
                    Play on spotify
                </a>
            </div>
        </div>
    )
}