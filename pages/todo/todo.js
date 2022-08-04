let inputText = document.getElementById("input")
let addBtn = document.getElementById("add")
let todoList = document.getElementById("todoList")

addBtn.addEventListener("click", ()=>{
    let appendList = document.createElement("div")
    let inputEl = document.createElement("input")
    inputEl.value = inputText.value
    inputEl.className = "inp"
    inputEl.disabled = true
    if(inputText.value){
        appendList.appendChild(inputEl)
        todoList.appendChild(appendList)
    }else{alert("enter something pleace")}
    inputText.value = ""

    let editBtn = document.createElement("button")
    editBtn.innerText = "edit"
    editBtn.className = "btn"
    editBtn.style.backgroundColor = "green"
    appendList.appendChild(editBtn)

    editBtn.addEventListener("click", (event) => {
        if(inputEl.disabled){
            inputEl.disabled = false
            deleteBtn.disabled = true
        }else{
            inputEl.disabled = true
            deleteBtn.disabled = false
        }
    })

    let deleteBtn = document.createElement("button")
    deleteBtn.innerText = "x"
    deleteBtn.className = "btn"
    deleteBtn.style.backgroundColor = "red"
    appendList.appendChild(deleteBtn)

    deleteBtn.addEventListener("click", (event) =>{
        deleteBtn.parentElement.remove()
    })
})