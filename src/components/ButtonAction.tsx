import type { ElementType } from "react"

type ButtonActionProps = {
    icon?: ElementType
    iconPosition?: 'left' | 'right'
    hasIcon?: boolean
    text: string
    variant?: boolean
    action?: () => void
}

export function ButtonAction({text, icon: Icon, iconPosition, hasIcon = false, variant = false, action}: ButtonActionProps){
    return(
        <button
            onClick={action}
            data-variant={variant}
            className="bg-[var(--color-dark)] text-[var(--color-white)] cursor-pointer flex gap-2 items-center justify-between rounded-xl border-none px-5 py-1.5 data-[variant=true]:bg-[var(--color-white)] data-[variant=true]:text-[var(--color-dark)] shadow-(--box-shadow)"
        >
            {hasIcon && iconPosition==='left' && Icon && <Icon size={22}/>}

            {text}

            {hasIcon && iconPosition==='right' && Icon && <Icon size={22}/>}
        </button>
    )
}