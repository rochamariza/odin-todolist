import "./ASSETS/CSS/style.css"
import "./ASSETS/JS/tasks.js"
import { renderList, tasksList, taskBox, dataBox, inter } from "./ASSETS/JS/render.js"
import { projectManager } from "./ASSETS/JS/projects.js"
const form = document.querySelector(".form")
const projectsList = projects()

form.addEventListener("submit", (event) =>{
    event.preventDefault()
    tasksList.createTask(taskBox.value, "teste", dataBox.value, "este")
    inter.innerHTML = ""
    renderList(tasksList.getList())
    console.log(projectsList.showProjects())
})
