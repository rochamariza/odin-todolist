import "./ASSETS/CSS/style.css"

const boxes = document.querySelector(".boxes")
boxes.style.display = "none"

document.querySelector(".add-task").addEventListener("click", () =>{
    boxes.style.display = "flex"
})


const inter = document.querySelector(".interface")
function Task(title, description, dueDate, priority){
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
}

function toDoList(){
    const todolist = []
    const createTask = (title, description, dueDate, priority)=>{
        const task = new Task(title, description, dueDate, priority)
        todolist.push(task)
    }
    const deleteTask = () =>{
        const index = todolist.findIndex(book => book.title === title);
        if (index !== -1) {
            todolist.splice(index, 1);
        }
    }
    const getList = () => todolist
    return { getList, createTask, deleteTask }
}

const titleBox = document.getElementById("texto")
const dataBox = document.getElementById("data")


function renderList(lista){
    for(let task = 0; task < lista.length; task++){
        const container = document.createElement("div")
        container.className = "container"
        const titleText = document.createElement("h1")
        titleText.className = "titleBox"
        titleText.textContent = lista[task].title
        const data = document.createElement("h2")
        data.className = "data"
        data.textContent = lista[task].dueDate
        container.appendChild(title)
        container.appendChild(data)
        inter.appendChild(container)
    }
}
const tasks = toDoList()
document.querySelector(".form").addEventListener("submit", (event) =>{
    event.preventDefault()
    tasks.createTask(titleBox.value, "teste", dataBox.value, "teste")
    console.log(tasks.todolist)

})
renderList(tasks.getList())


