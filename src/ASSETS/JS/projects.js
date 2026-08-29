import { toDoList } from "./tasks.js";
import { tasksList } from "./render.js";

function Projects(name, toDoList){
    this.name = name,
    this.toDoList = toDoList
}

export function projectManager(){
    const projectList = []
    function createProject(name){
        const newProject = new Projects(name, tasks.getList)
        projectList.push(newProject)
    }
    const showProjects = () => projectList
    return { createProject, showProjects }
}