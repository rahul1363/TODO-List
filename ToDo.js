let ToDoList = [
    {
        item:'Buy Milk' , 
        dueDate:'02/04/1999'
    },
    {
        item:'Go to shop' , 
        dueDate:'02/04/1999'
    },
];

displayItems();

function Addtodo(){
    let inputElement =document.querySelector('#ToDo-Input');
    let dateElement =document.querySelector('#ToDo-Date');

    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    
    ToDoList.push({item :todoItem,  dueDate: todoDate});
    inputElement.value ='';
    dateElement.value ='';

   displayItems();
}

function displayItems(){
    let containerElement = document.querySelector('.ToDo-container');

    let newhtml='';

    for(let i=0; i<ToDoList.length; i++){
        // let item =  ToDoList[i].item;
        // let dueDate =  ToDoList[i].dueDate;
        let {item , dueDate} = ToDoList[i];
        newhtml+=` 
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class="Todo-delete" onclick="ToDoList.splice(${i} ,1); displayItems();">Delete</button>
        `;
    }
    containerElement.innerHTML =newhtml;
}