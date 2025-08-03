import { useEffect, useState } from "react";

type TypeTask = {
  id: number
  title: string
  dueDate: string
  description: string
  completed: boolean
}

export function useTask() {
    const [tasks, setTasks] = useState<TypeTask[]>([])

    useEffect(() => {
        const stored = localStorage.getItem('tasks')
        if (stored) {
            try{
                const parsed: TypeTask[] = JSON.parse(stored)
                setTasks(parsed)
            }catch(e) {
                console.error('Erro ao ler tasks do localstorage:', e)
            }
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])

    function createTask(title: string, dueDate: string, description: string){
        const newTask: TypeTask = {
        id: Date.now(),
        title,
        dueDate,
        description,
        completed: false,
    };
        setTasks(prev => [...prev, newTask]);
    }

    function deleteTask(id: number){
        setTasks(prev => prev.filter(task => task.id !== id))
    }

    function editTask(id: number, updates: Partial<Omit<TypeTask, 'id'>>) {
        setTasks(prev =>
        prev.map(task =>
            task.id === id ? { ...task, ...updates } : task
        )
        )
    }

    function toggleTaskStatus(id: number) {
        setTasks(prev =>
        prev.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        )
        )
    }

    function clearCompletedTasks() {
        setTasks(prev => prev.filter(task => !task.completed))
    }

    return {
        tasks,
        createTask,
        deleteTask,
        editTask,
        toggleTaskStatus,
        clearCompletedTasks
    }
}