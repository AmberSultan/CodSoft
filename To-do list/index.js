let inputBox = document.getElementById("inputBox"); //where we enter text
let addBtn = document.getElementById("addBtn"); //ADD BUTTON
let list = document.getElementById("list"); //list items

function add(){
    let inputText = inputBox.value;
    if(inputBox.value == ""){
        alert("Please Enter Task");
    }
    
    else{

        let newElement = document.createElement("li");
        let p = document.createElement("p");
        p.innerHTML = `${inputBox.value}`;
        newElement.appendChild(p);
        list.appendChild(newElement);

        inputBox.value = "";//clear input box

        saved(inputText); //save all the entered tasks to the local storage

        const editBtn = document.createElement("button");
        editBtn.innerText="EDIT";
        editBtn.classList.add("innerBtn" , "editBtn");//adding class to button so that we style it in the css through our class .
        newElement.appendChild(editBtn);

        const deleteBtn = document.createElement("button");
        deleteBtn.innerText="REMOVE";
        deleteBtn.classList.add("innerBtn" , "deleteBtn");//adding class to button so that we style it in the css through our class .
        newElement.appendChild(deleteBtn);


    }
}

list.addEventListener('click' , deleteTask);

function deleteTask(e){
    if(e.target.innerHTML === "REMOVE"){
       list.removeChild(e.target.parentElement);
        deleteLocalToDo(e.target.parentElement);
    }
}

list.addEventListener('click' , editTask);

function editTask(e){
    if(e.target.innerHTML === "EDIT"){

        let editedTask = prompt("Edit the task:", e.target.parentNode.firstChild.textContent);
            
        if (editedTask !== null) {
            e.target.parentNode.firstChild.textContent = editedTask;
            
            
        }
    }   
}

function saved(saveTODO){               //this function saved all the todo tasks in the local storage

    let todo ; 
   if(localStorage.getItem("todo") === null){
        todo = [];  
    }
    else{
    todo = JSON.parse(localStorage.getItem("todo"));  //JSON.parse convert our string into the object
    }
    todo.push(saveTODO);
    console.log(todo);
    localStorage.setItem("todo", JSON.stringify(todo));
}

function getLocalTodo(){               //this function take all the todo task from the array and display on screen
    let todo;
    if(localStorage.getItem("todo") === null){
        todo = [];  
   }
   else{
   todo = JSON.parse(localStorage.getItem("todo"));  //JSON.parse convert our string into the object
   todo.forEach(todos => {

    let newElement = document.createElement("li");
        let p = document.createElement("p");
        p.innerHTML = todos;
        newElement.appendChild(p);
        list.appendChild(newElement);

        const editBtn = document.createElement("button");
        editBtn.innerText="EDIT";
        editBtn.classList.add("innerBtn" , "editBtn");
        newElement.appendChild(editBtn);
 
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText="REMOVE";
        deleteBtn.classList.add("innerBtn" , "deleteBtn");
        newElement.appendChild(deleteBtn);

        list.appendChild(newElement);

   });
   }
}

function deleteLocalToDo(saveTODO){
 
    let todo;
    if(localStorage.getItem("todo") === null){
         todo = [];  
    }
    else{
    todo = JSON.parse(localStorage.getItem("todo"));  //JSON.parse convert our string into the object
    }

    //let todoText = saveTODO;
    let todoText = saveTODO.children[0].innerHTML;
     let todoIndex = todo.indexOf(todoText);

    //splice function directly then make changes on the original one

    todo.splice(todoIndex , 1); //1 shows we have to delete one word.
   localStorage.setItem("todo",JSON.stringify(todo));

}

function saveEditedTask(){
    
}



document.addEventListener('DOMContentLoaded',getLocalTodo);














