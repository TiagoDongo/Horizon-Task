import { useState } from "react";
import { RiArrowRightLine, RiCheckDoubleFill, RiFocus2Line } from "@remixicon/react";
import { Logo, Footer, ThemeButton, Navbar, SearchBar, TaskForm, EditModal, Task, TaskChart, ButtonAction } from "./src/components"
import { useTask } from "./src/hooks/useTask";

function App() {
  const { tasks, createTask, deleteTask, editTask, toggleTaskStatus } = useTask();

  const [editTaskId, setEditTaskId] = useState<number | null>(null);

  // Buscar a task que está sendo editada (ou undefined)
  const taskToEdit = tasks.find((t) => t.id === editTaskId);

  return (
    <div className="bg-[var(--color-background)]  p-5 gap-5 flex flex-col h-fit">
      <ThemeButton />
      <Logo icon={RiCheckDoubleFill} text="Horizon Task" showText />
      <Footer>&copy;2025 TiagoDongo. Todos os direitos reservados.</Footer>
      <Navbar />
      <SearchBar showfilter />
      <TaskForm onCreate={(title, dueDate, description) => createTask(title, dueDate, description)} />

      <div className="flex justify-between items-center gap-5">
        <TaskChart text="teste" icon={RiFocus2Line} chartValue={1} status="success"/>
        <TaskChart text="jhhk" icon={RiFocus2Line} chartValue={10} status="default"/>
        <TaskChart text="teste" icon={RiFocus2Line} chartValue={1} status="failure"/>
        <TaskChart text="teste" icon={RiFocus2Line} chartValue={1} status="default"/>
      </div> 

      <ul className="flex flex-col gap-2.5" style={{ marginTop: "30px" }}>
        {tasks.map((task) => (
          <li key={task.id}>
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

      {taskToEdit && (
        <EditModal
          isOpen={editTaskId !== null}
          currentTitle={taskToEdit.title}
          currentDescription={taskToEdit.description}
          currentDate={taskToEdit.dueDate}
          onClose={() => setEditTaskId(null)}
          onSave={({ title, description, date }) => {
            editTask(editTaskId!, { title, description, dueDate: date });
            setEditTaskId(null);
          }}
        />
      )}

      <ButtonAction text="teste" hasIcon icon={RiArrowRightLine} iconPosition="left"/>
      <ButtonAction text="teste" hasIcon icon={RiArrowRightLine} iconPosition="left" variant/>
    </div>
  );
}