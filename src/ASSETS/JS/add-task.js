const addTask = document.querySelector(".add-task")
const formTask = document.querySelector(".boxes")

formTask.style.display = "none"

addTask.addEventListener("click", () =>{
    formTask.style.display = "flex"
})