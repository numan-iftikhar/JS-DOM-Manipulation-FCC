const inputTask = document.querySelector("#input-task");
const btnAdd = document.querySelector(".btn-add");
const tasks = document.querySelector(".tasks");
const btnCheck = document.querySelector(".btn-check");

// !FIXME: check-out and delete task functionality is pending
btnAdd.addEventListener("click", handleAddClick);

function handleAddClick() {
  // create a div to hold task
  let task = document.createElement("div");
  task.classList.add("task");

  //   div for btns
  let btnsDiv = document.createElement("div");
  btnsDiv.classList.add("btns-div");
  task.appendChild(btnsDiv);

  let li = document.createElement("span");
  li.innerText = `${inputTask.value}`;
  task.appendChild(li);

  // check btn
  let btnCheck = document.createElement("button");
  btnCheck.innerHTML = `<i class="fa-solid fa-check"></i>`;
  btnCheck.classList.add("btn-check");
  btnsDiv.appendChild(btnCheck);

  // delete btn
  let btnDelete = document.createElement("button");
  btnDelete.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  btnDelete.classList.add("btn-delete");
  btnsDiv.appendChild(btnDelete);

  // Validation: empty input
  if (inputTask.value === "") alert("Enter task first");
  else {
    tasks.appendChild(task);
  }
  inputTask.value = ""; // clear input field
}
