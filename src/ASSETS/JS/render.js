import { toDoList } from "./tasks.js"
import { projectManager } from "./projects.js"


const inter = document.querySelector(".tasks")
const tasksList = toDoList()
const taskBox = document.getElementById("texto")
const dataBox = document.getElementById("data")


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
            
    }
}
export { inter, tasksList, taskBox, dataBox }
