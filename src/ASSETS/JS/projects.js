import { toDoList } from "./tasks.js";

const tasks = toDoList()

function Projects(name, toDoList){
    this.name = name,
    this.toDoList = toDoList
}

function projectManager(){
    const projectList = []
    function createProject(name){
        const newProject = new Projects(name, tasks.getList)
        projectList.push(newProject)
    }
    const showProjects = () => projectList
    return { createProject, showProjects }
}