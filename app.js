//firstly the way learn from stack learner


const form = document.getElementById('form')
const inputBox = document.getElementById('inputBox')
const inComplete = document.getElementById('incomplete')
const complete = document.getElementById('complete')




//create the incomplete task item html

let createItem = function (task){
    let li = document.createElement('li')
    let checkBox = document.createElement('input')
        checkBox.type = 'checkbox';
    let label = document.createElement('label')
        label.innerText = task;
    li.appendChild(checkBox)
    li.appendChild(label)

    return li 
}


let addTask = function (event){
    event.preventDefault();
    let listItem =createItem(inputBox.value)
    inComplete.appendChild(listItem);
    inputBox.value = '';
     //bind the new list item
     bindIncompleteTask(listItem , completeTask)
}


let completeTask = function(){
    let taskItem = this.parentNode;
    let dltBtn = document.createElement('button')
    dltBtn.className='delete'
    dltBtn.innerText = 'Delete';
    taskItem.appendChild(dltBtn);
    let checkBox = taskItem.querySelector('input[type="checkbox"]')
    checkBox.remove();
    complete.appendChild(taskItem);
    bindcompleteTask(taskItem , deleteTask)
}

let deleteTask = function(){
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem)
}

let bindcompleteTask = function(taskItem , dltBtnClc){
    let dltBtn = taskItem.querySelector('.delete');
    dltBtn.onclick = dltBtnClc
    
    }


let bindIncompleteTask = function(taskItem , checkBoxClick){
let checkBox = taskItem.querySelector('input[type="checkbox"]');
checkBox.onchange = checkBoxClick;

}

for(let i =0 ; i<inComplete.children.length;i++ ){
    bindIncompleteTask(inComplete.children[i],completeTask)
}
for(let i =0 ; i<complete.children.length;i++ ){
    bindcompleteTask(complete.children[i],deleteTask)
}

form.addEventListener('submit', addTask)