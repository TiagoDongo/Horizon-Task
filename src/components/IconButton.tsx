import type { ElementType } from "react"

type IconButtonProps = {
    icon: ElementType
}

export function IconButton({icon: Icon}:IconButtonProps){
    return(
        <a 
            href="#"
            className="flex items-center justify-center text-[var(--color-dark)] bg-[var(--color-white)] p-1.5 rounded-lg transition-all duration-300 hover:bg-[var(--color-dark-variant)] hover:text-[var(--color-white)] shadow-(--box-shadow) hover:shadow-none"
        >
            <Icon size={22}/>
        </a>
    )
}