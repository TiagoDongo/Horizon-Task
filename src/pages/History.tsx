import { RiAddFill } from "@remixicon/react";
import {  Footer, Navbar, SearchBar, Task } from "../components";
import { useTask } from "../hooks/useTask";

export function History(){
    const { tasks, deleteTask, toggleTaskStatus } = useTask();

    const now = new Date();

    // Filtra tarefas concluídas (completed === true)
    // ou falhadas (completed === false E já passou do dueDate)
    const filteredTasks = tasks.filter(task => {
        if (task.completed === true) return true;

        if (
            (task.completed === false || task.completed === undefined) && // não concluída
            task.dueDate && new Date(task.dueDate) < now
        ) {
            return true; // falhada
        }

        return false; // pendente e dentro do prazo => não mostra
    });

    return(
        <div className="bg-(--color-background) animate-[fadeInAnimation ease 2s] transition-all duration-300 pb-5 min-h-dvh flex flex-col justify-between">
            <Navbar/>

            <main className="grid grid-cols-2  mt-[70px] px-5 gap-5 sm:grid-cols-1 lg:grid-cols-2">
                <div className="flex flex-col">
                    <SearchBar showfilter/>
                    <div className="mt-5 gap-5 flex px-5 pb-5">
                        <button className="bg-(--color-success) px-3 py-2 rounded-lg cursor-pointer text-zinc-50">
                            Concluidas
                        </button>
                        <button className="bg-(--color-danger) px-3 py-2 rounded-lg cursor-pointer text-zinc-50">
                            Falhadas
                        </button>
                        <button className="bg-amber-600 px-3 py-2 rounded-lg cursor-pointer text-zinc-50">
                            Encerradas
                        </button>
                        <button className="bg-(--color-info-dark) px-3 py-2 rounded-lg cursor-pointer text-zinc-50 opacity-60">
                            <RiAddFill/>
                        </button>
                    </div>
                </div>
                <div className="bg-(--color-white) rounded-xl shadow-(--box-shadow) p-5">
                    <h1 className="text-(--color-info-dark) text-2xl font-bold mb-5">Tasks</h1>

                    <div className="flex flex-col min-h-[570px] max-h-[900px] overflow-y-auto">
                        <ul className=" columns-1">
                            {filteredTasks.map((task) => (
                                <li key={task.id} className=" break-after-avoid">
                                    <Task
                                        title={task.title}
                                        description={task.description}
                                        completed={task.completed}
                                        hasdescription={!!task.description}
                                        onToggle={() => toggleTaskStatus(task.id)}
                                        onDelete={() => deleteTask(task.id)}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </main>

            <div className="px-5 mt-[70px]">
                <Footer>&copy;2025 TiagoDongo. Todos os direitos reservados.</Footer>
            </div>
        </div>
    )
}