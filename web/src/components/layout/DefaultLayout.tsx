import type { ReactNode } from "react"
import { ModeToggle } from "../mode-toggle"
import { MessageCircleQuestionMark } from "lucide-react"

type LayoutProps = {
    children: ReactNode
}
export function DefaultLayout({children}: LayoutProps) {

    return (
        <div className="min-h-screen w-full flex flex-col">
            <header>
                <h1>
                    Let Me Ask 
                    <span><MessageCircleQuestionMark className="w-7 h-7 " /></span>
                </h1>
                <div >
                    <ModeToggle />
                </div>
            </header>
            <main className="flex-1">
                {children}
            </main>
        </div>
    )
    
}