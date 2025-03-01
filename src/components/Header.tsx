"use client"
import { useSession } from "next-auth/react"
import Link from "next/link";
import UserButton from "./UserButton";
import DarkMode from "./DarkMode";
import SignInButton from "./SignInButton";
import Image from "next/image";
import logoPfp from "@/assets/images/Monkey D_ Luffy _ Pfp.jpeg"

export default function Header() {
    const session = useSession()
    const user = session?.data?.user
    return (
        <header className="w-full bg-background h-16 flex justify-center items-center sticky  border-b">
            <nav className="flex shrink justify-between items-center max-w-2/3 w-full h-full ">

                <Link href={"/"} className="font-bold -tracking-tighter text-4xl flex items-center justify-center gap-1.5">
                    <Image src={logoPfp} alt="logo" className="size-12" placeholder="blur" />
                    Nakama
                </Link>
                <ul className="flex justify-between items-center w-[150px]">
                    <li>
                        <DarkMode />
                    </li>
                    <li>
                        {user && <UserButton user={user} />}
                        {!user && session.status !== "loading" && <SignInButton />}
                    </li>
                </ul>
            </nav>
        </header >
    )
}
