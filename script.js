
let form = document.querySelector('form');
let newTask = document.querySelector('#new-task');
let todoUl = document.querySelector('#items');
let completeUl = document.querySelector('.complete-list ul');

let createTask = function(task){
    let listitem = document.createElement('li');
    let checkbox = document.createElement('input');
    let label = document.createElement('label');
    label.innerText = task;
    checkbox.type = 'checkbox';
    listitem.appendChild(checkbox);
    listitem.appendChild(label);
    return listitem;
}
let addTask = function(event){
    event.preventDefault();
    let listitem = createTask(newTask.value);
    todoUl.appendChild(listitem);
    newTask.value = "";
    incompleteTaskBind(listitem,completeTask);
}
let completeTask = function(){
    let listitem = this.parentNode;
    let deletebtn = document.createElement('button');
    deletebtn.innerText = 'Delete';
    deletebtn.className = 'delete';
    listitem.appendChild(deletebtn);

    let checkbox = listitem.querySelector('input[type="checkbox"]');
    checkbox.remove();
    completeUl.appendChild(listitem);
    completeTaskBind(listitem,deleteTask);
}

let deleteTask = function(){
    let listitem = this.parentNode;
    let ul = listitem.parentNode;
    ul.removeChild(listitem);
}
let incompleteTaskBind = function(taskitem,checkboxClick){
    let checkbox = taskitem.querySelector('input[type="checkbox"]');
    checkbox.onchange = checkboxClick;
}
for(let i = 0; i<todoUl.children.length;i++){
    incompleteTaskBind(todoUl.children[i], completeTask);
}

let completeTaskBind = function(taskitem,deletebtnClick){
    let deletebtn = taskitem.querySelector('.delete');
    deletebtn.onclick = deletebtnClick;
}
for(let i = 0; i<completeUl.children.length;i++){
    completeTaskBind(completeUl.children[i],deleteTask);
}


form.addEventListener('submit',addTask);