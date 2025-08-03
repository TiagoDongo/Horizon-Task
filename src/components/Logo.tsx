import type { ElementType } from "react"

type LogoProps = {
    icon: ElementType
    text ?: string
    showText ?: boolean
}

export function Logo({icon: Icon, text, showText= false}:LogoProps) {
    return (
        <div className="flex items-center w-fit gap-2.5">
            <a  href="#" className="bg-[var(--color-dark)] text-[var(--color-white)] rounded-[50px] p-1.5" >
                <Icon size={22} />
            </a>
            {showText && <h3 className="text-[var(--color-dark)] font-bold text-2xl">{text}</h3>}
        </div>
    )
}