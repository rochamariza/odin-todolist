import "./ASSETS/CSS/styles.css"

const todolist = []

function Task(title, description, dueDate, priority){
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
}

function toDoList(){
    const createTask = (title, description, dueDate, priority)=>{
        const task = new Task(title, description, dueDate, priority)
        todolist.push(task)
    }
    const deleteTask = () =>{
        const index = todolist.findIndex(book => book.id === id);
        if (index !== -1) {
            todolist.splice(index, 1);
        }
    }
    return { createTask, deleteTask }
}