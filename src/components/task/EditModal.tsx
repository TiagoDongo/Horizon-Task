import { useState, useEffect, useRef } from "react"

type EditModalProps = {
  isOpen: boolean
  currentTitle: string
  currentDescription: string
  currentDate: string
  onClose: () => void
  onSave: (updatedTask: { title: string; description: string; date: string; }) => void
}

export function EditModal({ isOpen, currentTitle, currentDescription, currentDate, onClose, onSave }: EditModalProps) {
    const [title, setTitle] = useState(currentTitle)
    const [description, setDescription] = useState(currentDescription)
    const [date, setDate] = useState(currentDate)
    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setTitle(currentTitle)
        setDescription(currentDescription)
        setDate(currentDate)
    }, [currentTitle, currentDescription, currentDate])

     useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) { onClose() }
        }
        if (isOpen) { document.addEventListener("mousedown", handleClickOutside)}
        return () => { document.removeEventListener("mousedown", handleClickOutside)}
    }, [isOpen, onClose])

    if (!isOpen) return null

    return (
        <div  className="fixed inset-0 flex items-center justify-center bg-black/70  z-50 "  >
            <div 
                ref={modalRef}
                className="bg-zinc-600 p-5 rounded-xl shadow-xl w-96 gap-5 flex flex-col"
            >
                <h2 className="text-lg font-semibold text-zinc-300">
                    Editar Tarefa
                </h2>

                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Título"
                    className="w-full px-4 py-2 rounded-xl border border-gray-300 placeholder:text-zinc-300 text-zinc-300 outline-none placeholder:opacity-40" 
                />

                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl border border-gray-300 outline-none placeholder:text-zinc-300 text-zinc-300 placeholder:opacity-40"
                />

                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Descrição"
                    rows={3}
                    className="w-full px-4 py-2 rounded-xl border border-gray-300 outline-none placeholder:text-zinc-300 text-zinc-300 placeholder:opacity-40 resize-none"
                />


                <div className="flex justify-end gap-2">
                    <button onClick={onClose} className="px-5 py-2 bg-[var(--color-danger)] rounded-xl text-zinc-50 font-light cursor-pointer">
                        Cancelar
                    </button>
                    <button className="px-4 py-2 bg-[var(--color-success)] rounded-xl text-zinc-50 font-light cursor-pointer"
                        onClick={() => {
                            if (title.trim()) {
                                onSave({
                                    title: title.trim(),
                                    description: description.trim(),
                                    date,
                                })
                                onClose()
                            }
                        }}
                    >
                        Salvar
                    </button>
                </div>             
            </div>
        </div>
    )
}
