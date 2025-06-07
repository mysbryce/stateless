"use client"

import Logo from "./logo"

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-start">
                <a href="mailto:fx.frame009@gmail.com" target="_blank" className="flex items-center gap-2 text-xl">
                    <Logo />

                    <span className="text-base underline">
                        fx.frame009@gmail.com
                    </span>
                </a>
            </div>
            <div className="navbar-end">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost bg-base-100 btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {" "}
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7"
                            />{" "}
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        <li>
                            <a onClick={() => window.open('https://stateless-prt.vercel.app/', '_blank')?.focus()}>Portfolio</a>
                        </li>
                        <li>
                            <a onClick={() => window.open('https://discord.com/users/723157846635839499', '_blank')?.focus()}>Discord</a>
                        </li>
                        <li>
                            <a onClick={() => window.open('https://github.com/mysbryce', '_blank')?.focus()}>Github</a>
                        </li>
                        <li>
                            <a onClick={() => window.open('https://msc-fivem.shop/', '_blank')?.focus()}>MSC Store</a>
                        </li>
                        <li>
                            <a onClick={() => window.open('https://docs.msc-fivem.shop/', '_blank')?.focus()}>MSC Docs</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
