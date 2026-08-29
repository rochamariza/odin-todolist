import { toDoList } from "./tasks.js"


const inter = document.querySelector(".tasks")
const tasksList = toDoList()
const taskBox = document.getElementById("texto")
const dataBox = document.getElementById("data")


export function renderList(lista){
    for(let task = 0; task < lista.length; task++){
        const container = document.createElement("div")
        container.className = "container"
        const titleText = document.createElement("h1")
        titleText.className = "titleBox"
        titleText.textContent = lista[task].title
        const data = document.createElement("h2")
        data.className = "data"
        data.textContent = lista[task].dueDate
        container.appendChild(titleText)
        container.appendChild(data)
        inter.appendChild(container)
    }
}
export { inter, tasksList, taskBox, dataBox }
