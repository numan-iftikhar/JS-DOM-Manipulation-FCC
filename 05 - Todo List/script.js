const inputTask = document.querySelector("#input-task");
const btnAdd = document.querySelector(".btn-add");
const tasks = document.querySelector(".tasks");
// console.log(inputTask, btnAdd, tasks)

// !FIXME: Adding tasks not working fine and check-out and delete task functionality is pending
btnAdd.addEventListener("click", function() {
    // create a div to hold task
    let task = document.createElement("div");
    task.classList.add('task');

    let li = document.createElement("span");
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);
    
    // check btn
    let btnCheck = document.createElement("button");
    btnCheck.innerText = `<i class="fa-solid fa-check"></i>`
    btnCheck.classList.add("btn-check");
    task.appendChild(btnCheck);
    
    // delete btn
    let btnDelete = document.createElement("button");
    btnDelete.innerText = `<i class="fa-solid fa-trash-can"></i>`
    btnDelete.classList.add("btn-delete");
    task.appendChild(btnDelete);

    // Validation: empty input
    if(inputTask.value === "") alert("Enter task first");
    else{
        tasks.appendChild(task);
    }
    inputTask.value = ""; // clear input field
    console.log(task);
})