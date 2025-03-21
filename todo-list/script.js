function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    
    if (taskText === "") return;
    
    let li = document.createElement("li");
    li.innerText = taskText;
    
    
    let removeBtn = document.createElement("button");
    li.appendChild(removeBtn);
    removeBtn.innerText = "X";
   
    
    
    removeBtn.onclick = function () {
        li.remove();
    };
    document.getElementById("taskList").appendChild(li);
    
    taskInput.value = "";
}