import { toDoList } from "./tasks.js"
import { projectManager } from "./projects.js"


const inter = document.querySelector(".tasks")
const taskBox = document.getElementById("texto")
const dataBox = document.getElementById("data")
const projectContainer = document.querySelector(".container-projects")
const todoName = document.querySelector(".title-interface")


export function renderList(listOfToDos){
    for(let task = 0; task < listOfToDos.length; task++){
        /// Container
        const container = document.createElement("div")
        container.className = "container"
        /// Title
        const titleText = document.createElement("h1")
        titleText.className = "titleBox"
        titleText.textContent = listOfToDos[task].title
        /// Date
        const data = document.createElement("h2")
        data.className = "data"
        data.textContent = listOfToDos[task].dueDate
        /// Appends
        container.appendChild(titleText)
        container.appendChild(data)
        inter.appendChild(container)
    }
}

export function renderProjects(listOfProjects){
    for(let task = 0; task < listOfProjects.length; task++){
        /// Container of Projects
        const containerProjects = document.createElement("div")
        containerProjects.className = "list-projects"
        const titleProject = document.createElement("button")
        titleProject.className = "btn-project"
        titleProject.textContent = listOfProjects[task].name
        containerProjects.appendChild(titleProject)
        projectContainer.appendChild(containerProjects)
    }
}

export { inter, taskBox, dataBox }
