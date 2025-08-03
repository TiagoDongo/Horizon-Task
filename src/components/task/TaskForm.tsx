import { useState } from "react";

type TaskFormProps = {
    onCreate: (title: string, dueDate: string, description: string) => void
}


export function TaskForm({onCreate}: TaskFormProps){
    const [title, setTitle] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [description, setDescription] = useState("");

    function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title || !dueDate) return;

    onCreate(title, dueDate, description);
    setTitle("");
    setDueDate("");
    setDescription("");
    }
    
    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col w-[460px] gap-[30px] bg-[var(--color-white)] text-[var(--color-dark)] rounded-xl h-[570px] min-w-[460px] shadow-(--box-shadow) p-5"
        >

            <input 
                type="text"
                placeholder="Título da Tarefa"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-[var(--color-background)] rounded-lg text-[var(--color-dark)] outline-none text-sm placeholder:text-[var(--color-dark)] opacity-90 border border-[var(--color-info-dark)] px-4 py-2"
            />

            <input 
                type="date"
                required
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="bg-[var(--color-background)] rounded-lg text-[var(--color-dark)] outline-none text-sm border border-[var(--color-info-dark)] px-4 py-2"
            />

            <textarea
                value={description}
                placeholder="Detalhes da tarefa..."
                onChange={(e) => setDescription(e.target.value)}
                className="text-sm resize-none bg-[var(--color-background)] h-[200px] rounded-xl outline-none placeholder:text-[var(--color-dark)] opacity-90 border border-[var(--color-info-dark)] px-4 py-2"
            ></textarea>

            <button 
                type="submit"
                className="bg-[var(--color-dark)] self-center rounded-xl text-[var(--color-white)] cursor-pointer px-5 py-2"
            >
                Adicionar Task
            </button>

            <p className="text-[var(--color-dark)]">
                * Dica: Use o campo de descrição para detalhes adicionais, se necessário.
            </p>
        </form>
    )
}