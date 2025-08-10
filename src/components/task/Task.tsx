import { RiArrowDownSLine, RiCheckFill, RiCloseFill, RiDeleteBinLine, RiPencilLine} from "@remixicon/react"
import { useState } from "react"

type TaskProps = {
    title: string
    description?: string
    completed?: boolean
    hasdescription?: boolean
    showdesc?: boolean
    onToggle?: () => void
    onEdit?: () => void
    onDelete?: () => void
};

export function Task({ title, description, completed = false, hasdescription = false, showdesc = false, onToggle, onEdit, onDelete}: TaskProps) {
    const [showDescription, setShowDescription] = useState(showdesc)

    return (
        <div
            data-completed={completed}
            className="task bg-[var(--color-dark-variant)] rounded-xl flex flex-col gap-3 max-w-lg min-w-xs py-2.5 px-5 data-[completed=true]:bg-[var(--color-success)]"
        >
            <div className="flex items-center justify-between gap-20">
                <div className="flex gap-2.5 items-center">
                    <button onClick={onToggle} className="text-[var(--color-white)] border-2 rounded-md cursor-pointer" >
                        {completed ? <RiCloseFill size={26} /> : <RiCheckFill size={26} />}
                    </button>
                    <h4 title={title} className="text-lg font-medium text-[var(--color-white)] truncate max-w-[85px] 2xl:max-w-[200px]">
                        {title}
                    </h4>
                </div>

                <div className="flex gap-5 items-center">
                    {hasdescription && (
                        <button 
                            onClick={() => setShowDescription((prev) => !prev)} 
                            className="toggle-description text-lg text-[var(--color-white)] font-medium p-0.5 rounded-sm transition-all hover:bg-[var(--color-dark)]"
                        >
                            <RiArrowDownSLine />
                        </button>
                    )}

                    <button 
                        onClick={onEdit} 
                        className="text-lg text-[var(--color-white)] font-medium p-0.5 rounded-sm transition-all hover:bg-[var(--color-dark)]"
                    >
                        <RiPencilLine />
                    </button>

                    <button 
                        onClick={onDelete} 
                        className="text-lg text-[var(--color-white)] font-medium p-0.5 rounded-sm transition-all hover:bg-[var(--color-dark)]"
                    >
                        <RiDeleteBinLine />
                    </button>
                </div>
            </div>

            {hasdescription && showDescription && (
                <div className="description bg-[var(--color-dark)] rounded-xl overflow-hidden max-h-80 flex-wrap py-2 px-5">
                    <p className="text-white text-sm font-medium">{description}</p>
                </div>
            )}
        </div>
    );
}
