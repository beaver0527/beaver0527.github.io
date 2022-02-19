const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = document.querySelector("#todo-form Input");
const TODO_KEY ="ToDos"
let toDo = [];


function saveToDos(){
    localStorage.setItem(TODO_KEY,JSON.stringify(toDo));
}

function DeleteToDo (event) {
    const li = event.target.parentElement;
    li.remove();
    console.log(toDo);
    toDo = toDo.filter((item) => item.id !== parseInt(li.id));
    saveToDos();
}
function createList(newTodoValue){
    const list = document.createElement("li");
    const span = document.createElement("span");
    list.id = newTodoValue.id;
    list.innerText= newTodoValue.text;
    const button = document.createElement("button");
    button.innerText ="X"
    button.addEventListener("click",DeleteToDo);
    //append가 맨 뒤에 있어야하는 이유는 빈 것을 추가하지 않기 위해 로직상
    list.appendChild(span);
    list.appendChild(button);
    toDoList.appendChild(list);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj ={
        text: newToDo,
        id: Date.now(),
    };
    toDo.push(newToDoObj);
    createList(newToDoObj);
    saveToDos();
    
}


const savedToDos = localStorage.getItem(TODO_KEY);

//arrow fucntion 
//foreach는 array의 item을 함수에 각각 넣어주면서 실행한다.
if (savedToDos !==null){
    const parsedToDos = JSON.parse(savedToDos);
    toDo = parsedToDos;
    parsedToDos.forEach(createList);
    ///create({text:"a",id:"1232141231"}) 이런식으로 실행했을 것
}
toDoForm.addEventListener("submit",handleToDoSubmit);


