document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form")
  
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    newToDo(e.target.todoo.value)
    form.reset()
    })
});

function newToDo(todo){
  let li = document.createElement("li")
  let btn = document.createElement("button")
  let ul = document.getElementById("tasks")
  const prioritySelect = document.getElementById('priority');
  const priority = prioritySelect.value;

  li.textContent = `${todo} `
  btn.textContent = "X"

  li.classList.add(priority);

  li.appendChild(btn)
  ul.appendChild(li)

  btn.addEventListener("click", deleteButton)

}

function deleteButton(e){
  e.target.parentNode.remove()
}
