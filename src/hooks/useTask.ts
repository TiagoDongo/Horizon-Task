import { useEffect, useState } from "react";

type TypeTask = {
  id: number
  title: string
  dueDate: string
  description: string
  completed: boolean
}

const API_URL = "http://localhost:3000/task"

export function useTask() {
    const [tasks, setTasks] = useState<TypeTask[]>([])

    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => setTasks(data))
            .catch(err => console.error("Erro ao buscar tarefas:", err))
    }, [])

    async function createTask(title: string, dueDate: string, description: string) {
        const res = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, dueDate, description })
        })
        const newTask = await res.json()
        setTasks(prev => [...prev, newTask])
    }

    async function deleteTask(id: number) {
        await fetch(`${API_URL}/${id}`, { method: "DELETE" })
        setTasks(prev => prev.filter(t => t.id !== id))
    }

    async function editTask(id: number, updates: Partial<Omit<TypeTask, "id">>) {
        const res = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updates)
        })
        const updated = await res.json();
        setTasks(prev =>
            prev.map(t => (t.id === id ? updated : t))
        )
    }

    async function toggleTaskStatus(id: number) {
        const task = tasks.find(t => t.id === id)
        if (!task) return
        await editTask(id, { completed: !task.completed })
    }

    async function clearCompletedTasks() {
        const completedIds = tasks.filter(t => t.completed).map(t => t.id)
        for (const id of completedIds) {
        await deleteTask(id)
        }
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