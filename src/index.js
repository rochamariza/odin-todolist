import "./ASSETS/CSS/style.css"
import "./ASSETS/JS/tasks.js"
import { renderList, tasks, taskBox, dataBox, inter } from "./ASSETS/JS/render.js"
const form = document.querySelector(".form")

form.addEventListener("submit", (event) =>{
    event.preventDefault()
    tasks.createTask(taskBox.value, "teste", dataBox.value, "este")
    inter.innerHTML = ""
    renderList(tasks.getList())
})
