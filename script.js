const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

addBtn.addEventListener("click", addTodo);
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") addTodo();
});

function addTodo() {
  const task = input.value.trim();
  if (!task) return;

  const li = document.createElement("li");
  li.textContent = task;

  li.addEventListener("click", () => li.classList.toggle("done"));

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", () => li.remove());

  li.appendChild(deleteBtn);
  list.appendChild(li);

  input.value = "";
}
