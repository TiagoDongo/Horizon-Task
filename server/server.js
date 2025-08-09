const express = require("express")
const fs = require("fs")
const path = require("path")
const cors = require("cors")

const app = express()
const PORT = 3000

app.use(cors({ origin: "http://localhost:5173" }))
app.use(express.json())

const taskFile = path.join(__dirname, "tasks.json")

function readTasks() {
    try {
        if (!fs.existsSync(taskFile)) {
            fs.writeFileSync(taskFile, "[]")
        }
        const data = fs.readFileSync(taskFile, "utf-8")
        return JSON.parse(data)
    } catch (error) {
        console.error("Erro ao ler ou criar tasks.json:", error)
        return []
    }
}

function saveTask(tasks){
    try {
        fs.writeFileSync(taskFile, JSON.stringify(tasks, null, 2))
    } catch (error) {
        console.error("Erro ao salvar tasks.json:", error)
    }
}

app.get("/task", (req, res) => {
    res.json(readTasks())
})

app.post("/task", (req, res) => {
    const tasks = readTasks()
    const newTask = {
        id: Date.now(),
        title: req.body.title,
        dueDate: req.body.dueDate,
        description: req.body.description || "",
        completed: false
    }

    tasks.push(newTask)
    saveTask(tasks)
    res.status(201).json(newTask)
})

app.put("/task/:id", (req, res) => {
    let tasks = readTasks()
    const taskId = parseInt(req.params.id)
    tasks = tasks.map(task => task.id === taskId ? {...task, ...req.body} : task)
    saveTask(tasks)
    res.json({message: "Tarefa atualizada"})
})

app.delete("/task/:id", (req, res) => {
    let tasks = readTasks()
    const taskId = parseInt(req.params.id)
    tasks = tasks.filter(task => task.id !== taskId)
    saveTask(tasks)
    res.json({message: "Tarefa deletada"})
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})