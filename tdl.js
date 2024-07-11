const inputBox = document.querySelector("#input-box");
const taskContainer = document.querySelector("#task-container");

function addTask() {
    if(inputBox.value === ''){
        alert("TASK CANNOT BE EMPTY ");
    } 
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        taskContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = "";''
    saveData();
}

taskContainer.addEventListener("click", function(evt) {
    if(evt.target.tagName === "LI") {
        evt.target.classList.toggle("checked");
        saveData();
    } else if (evt.target.tagName === "SPAN"){
        evt.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", taskContainer.innerHTML);
}

function showTask()  {
    taskContainer.innerHTML = localStorage.getItem("data");
}

showTask();