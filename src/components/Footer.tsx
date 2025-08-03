import type { ReactNode } from "react"

interface FooterProps {
    children ?: ReactNode
}

export function Footer({children}:FooterProps){
    return(
        <footer 
            className="bg-[var(--color-white)] shadow-(--box-shadow) flex justify-center py-2 px-5 rounded-xl items-center text-[var(--color-dark)] text-sm font-semibold opacity-75"
        >
            {children}
        </footer>
    )
}