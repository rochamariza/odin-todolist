function Task(title, description, dueDate, priority){
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
}

export function toDoList(){
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


