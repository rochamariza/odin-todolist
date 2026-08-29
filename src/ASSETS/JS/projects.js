import { toDoList } from "./tasks";

export function projects(){
    const projectList = []
    let nameProject = ""
    function createProject(name){
        projectList.push(toDoList().getList)
        nameProject = name
    }
    return { nameProject, createProject }
}