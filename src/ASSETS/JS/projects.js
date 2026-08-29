import { toDoList } from "./tasks.js";

const tasks = toDoList()
export function projects(){
    const projectList = []
    let nameProject = ""
    function createProject(name){
        nameProject = name
        projectList.push(nameProject)
    }
    function insertToProject(name){
        if(name in projectList){
            const newToDoList = []
            newToDoList.push(tasks.getList)
        }else{
            alert("Erro")
        }
    }
    const showProjects = () => projectList
    return { nameProject, createProject, showProjects, insertToProject }
}