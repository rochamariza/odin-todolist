import "./ASSETS/CSS/style.css"
import "./ASSETS/JS/tasks.js"
import "./ASSETS/JS/sidepanel.js"
import "./ASSETS/JS/add-task.js"
import { renderList, taskBox, dataBox, inter } from "./ASSETS/JS/render.js"
import { projectManager } from "./ASSETS/JS/projects.js"
import { toDoList } from "./ASSETS/JS/tasks.js"
const form = document.querySelector(".form")
const projectsList = projectManager()
const tasksList = toDoList()

form.addEventListener("submit", (event) =>{
    event.preventDefault()
    tasksList.createTask(taskBox.value, "teste", dataBox.value, "este")
    inter.innerHTML = ""
    renderList(tasksList.getList())
    console.log(projectsList.showProjects())
})
