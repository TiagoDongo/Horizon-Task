import { RiCheckboxCircleLine, RiCloseCircleLine, RiFileList3Line } from "@remixicon/react";
import { EditModal, Footer, Navbar, SearchBar, Task, TaskChart, TaskForm } from "../components";
import { useTask } from "../hooks/useTask";
import { useState } from "react";

export function Dashboard(){
    const { tasks, createTask, deleteTask, editTask, toggleTaskStatus } = useTask();
    const [editTaskId, setEditTaskId] = useState<number | null>(null)
    const taskToEdit = tasks.find((t) => t.id === editTaskId)

     const now = new Date();
    // Pendente = não concluída E dentro do prazo 
    const pendingTasks = tasks.filter(task => {
        if (task.completed) return false; // remove concluídas
        if (task.dueDate && new Date(task.dueDate) < now) return false; // remove falhadas
        return true; // pendente
    });

    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(t => t.completed).length;
    const failedTasks = tasks.filter(
        t => !t.completed && t.dueDate && new Date(t.dueDate) < now
    ).length;

    return(
        <div className="bg-[var(--color-background)] animate-[fadeInAnimation ease 2s] transition-all duration-300 pb-5 min-h-dvh flex flex-col justify-between">
            <Navbar/>

            <main className="mt-[70px] flex gap-[30px] px-5 h-full">
                <TaskForm onCreate={(title, dueDate, description) => createTask(title, dueDate, description)}/>

                <section className=" flex flex-col flex-1 gap-5">
                    <div className="flex items-center justify-between gap-5">
                        <TaskChart text="Total Tasks" icon={RiFileList3Line} chartValue={totalTasks} status="default"/>
                        <TaskChart text="Cocluidas" icon={RiCheckboxCircleLine} chartValue={completedTasks} status="success"/>
                        <TaskChart text="Falhadas" icon={RiCloseCircleLine} chartValue={failedTasks} status="failure"/>
                    </div>

                    <div className="flex flex-col gap-5 mt-[30px]  h-full">
                        <SearchBar/>

                        <div className="bg-[var(--color-white)] p-5 rounded-xl h-full shadow-(--box-shadow)">
                            <ul className=" columns-2 overflow-hidden w-full justify-center flex gap-8">
                                {pendingTasks.map(task => (
                                    <li key={task.id} className=" break-inside-avoid mb-5">
                                        <Task
                                            title={task.title}
                                            description={task.description}
                                            completed={task.completed}
                                            hasdescription={!!task.description}
                                            onToggle={() => toggleTaskStatus(task.id)}
                                            onDelete={() => deleteTask(task.id)}
                                            onEdit={() => setEditTaskId(task.id)}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {taskToEdit && (
                            <EditModal
                                isOpen={editTaskId !== null}
                                currentTitle={taskToEdit.title}
                                currentDescription={taskToEdit.description}
                                currentDate={taskToEdit.dueDate}
                                onClose={() => setEditTaskId(null)}
                                onSave={({title, description, date}) => {
                                    editTask(editTaskId!, {title, description, dueDate: date});
                                    setEditTaskId(null)
                                }}
                            />
                        )}
                    </div>
                </section>

            </main>

            <div className="px-5 mt-[70px]">
                <Footer>&copy;2025 TiagoDongo. Todos os direitos reservados.</Footer>
            </div>
        </div>
    )
}