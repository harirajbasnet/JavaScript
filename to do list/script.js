
const inputBox = document.getElementById("inputbox");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something");
    } 
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // This must be INSIDE the else block to access 'li'
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Fixed unicode to \u00d7
        li.appendChild(span);
        
        // Clear input and save data AFTER adding the task
        inputBox.value = "";
        saveData(); 
    }
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if ( e.target.tagName =="SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
}
,false);
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();
