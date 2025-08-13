import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { isAuthenticated, signOut } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";

const RootLayout = async ( { children }: { children: ReactNode}) => {
    const isUserAuthenticated = await isAuthenticated();

    if(!isUserAuthenticated) {
        redirect('/sign-in');
    }
    
    return (
        <div className="root-layout">
            <nav className="top-0 z-10">
                <div className="flex justify-between items-center max-w-7xl mx-auto">
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/logo.png" alt="Logo" width={38} height={32} />
                        <h2 className="text-primary-100">MockMate</h2>
                    </Link>
                    <form action={signOut}>
                        <button className="px-4 py-2 bg-red-600 text-white font-bold rounded-md shadow-lg hover:bg-red-700 hover:scale-105 hover:shadow-xl transition duration-300">
                            Sign Out
                        </button>
                    </form>
                </div>
            </nav>
            <main className="w-full">
                {children}
            </main>
        </div>
    )

}

export default RootLayout;