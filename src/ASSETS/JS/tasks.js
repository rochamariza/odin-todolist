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
        container.appendChild(titleText)
        container.appendChild(data)
        inter.appendChild(container)
    }
}

