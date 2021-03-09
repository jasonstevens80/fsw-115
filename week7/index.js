function getTodoData() {
    axios.get("https://api.vschool.io/JasonS/todo")
        .then(response => listTodos(response.data))
        .catch(error => console.log(error))
}

function listTodos(todos) {
    clearTodos();
    for (let i = 0; i < todos.length; i++) {

        const toDoId = todos[i]._id;
        const toDoList = document.getElementById('todoList');

        const h3 = document.createElement('h3');
        h3.textContent = todos[i].title;

        const description = document.createElement('p');
        description.textContent = todos[i].description;

        const beerDisplay = document.createElement('p');
        beerDisplay.style.fontSize="13px"
        beerDisplay.textContent = todos[i].imgUrl;

        
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fa fa-trash"></i>';

        

        const completion = document.createElement('input');
        completion.type = 'checkbox';

        const isComplete = todos[i].completed ? true : false;
        if (isComplete) {
            h3.className = 'todo-complete';
            completion.checked = true;
        } else {
            h3.className = 'todo-not-complete'
            completion.checked = false;
        }

        

        completion.addEventListener("click", function (event) {
            let toDoCompletion = event.target.checked;
            let updates = { 'completed': toDoCompletion }


            axios.put(`https://api.vschool.io/JasonS/todo/${toDoId}`, updates)
                .then(response => getTodoData())
                .catch(error => console.log(error))

        })

      


        deleteButton.addEventListener("click", function (event) {

            axios.delete(`https://api.vschool.io/JasonS/todo/${toDoId}`)
                .then(response => getTodoData())
                .catch(error => console.log(error))

        })

        h3.appendChild(completion);
        toDoList.appendChild(h3);
        toDoList.appendChild(description);
        toDoList.appendChild(beerDisplay)
        h3.appendChild(deleteButton);
       
       
    }
}

function clearTodos() {
    const toDoList = document.getElementById('todoList')
    while (toDoList.firstChild) {
        toDoList.removeChild(toDoList.firstChild)
    }
}

getTodoData();

const todoInput = document.todoInput
todoInput.addEventListener("submit", function (event) {
    event.preventDefault()

    axios.get(" https://api.punkapi.com/v2/beers/random")
        .then(response => {
            
            console.log(response.data[0].tagline)

            let randomBeer = response.data[0].tagline
            let beerTagline = response.data[0].name
            

            const newTodo = {
                title: todoInput.title.value,
                description: todoInput.description.value,
                imgUrl: beerTagline + " ~ " + randomBeer 
            }

            todoInput.title.value = "";
            todoInput.description.value = "";

            axios.post("https://api.vschool.io/JasonS/todo", newTodo)
                .then(response => getTodoData())
                .catch(error => console.log(error))

        }
        ).catch(error => console.log(error))
})