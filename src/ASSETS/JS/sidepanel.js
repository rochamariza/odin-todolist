import { projectManager } from "./projects.js"
import { renderProjects } from "./render.js"

const activateProjectBtn = document.querySelector(".projects-btn")
const sidePanel = document.querySelector(".side-panel")
const typeName = document.querySelector("#project-name")
const addProject = document.getElementById("add-project")
const modal = document.querySelector(".dialog")
const closeModal = document.querySelector(".close-modal")
const formProject = document.querySelector(".form-project")

modal.style.display = "none"

activateProjectBtn.addEventListener("click", () =>{
    if(sidePanel.id == "active"){
        sidePanel.id = "inactive"
    }else{
        sidePanel.id = "active"
    }
    
})
const projectMng = projectManager()
addProject.addEventListener("click", () =>{
    modal.style.display = "flex"
    modal.showModal()
})
formProject.addEventListener("submit", (event) =>{
    event.preventDefault()
    projectMng.createProject(typeName.value)
    modal.style.display = "none"
    modal.close()
    renderProjects(projectMng.showProjects())
})
closeModal.addEventListener("click", () =>{
    modal.style.display = "none"
    modal.close()
})
