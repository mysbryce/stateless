"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { FileWarning } from 'lucide-react'

interface DiscordAlertDialogProps {
    children: React.ReactNode
}

export function DiscordAlertDialog({ children }: DiscordAlertDialogProps) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Button
                variant="outline"
                className="border-zinc-700 hover:bg-zinc-800"
                onClick={() => setOpen(true)}
            >
                {children}
            </Button>
            <AlertDialog open={open} onOpenChange={setOpen}>
                <AlertDialogContent className="bg-zinc-900 border border-zinc-800 text-white">
                    <AlertDialogHeader>
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800">
                            <FileWarning className="h-6 w-6 text-purple-500" />
                        </div>
                        <AlertDialogTitle className="text-center text-xl">Sorry :3</AlertDialogTitle>
                        <AlertDialogDescription className="text-center text-zinc-400">
                            Sorry, right now we currently have no Discord Server
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter className="flex justify-center">
                        <AlertDialogAction className="bg-purple-500 hover:bg-purple-600">Ok, got it</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}
