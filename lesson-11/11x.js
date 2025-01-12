const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        // print on the web page
        const todoObject = todoList[i];
        const {name, dueDate} = todoObject;
        const html = `
                <div>${name}</div>
                <div>${dueDate}</div>
                <button onclick="
                        todoList.splice(${i}, 1);
                        localStorage.setItem('todoList', JSON.stringify(todoList));
                        renderTodoList();
                    " class="delete-button">Delete</button>
            `;
        todoListHTML += html;
    }

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const dueDateElement = document.querySelector('.js-due-date-input');
    const name = inputElement.value;
    const dueDate = dueDateElement.value;
    todoList.push({
        name: name,
        dueDate: dueDate
    });
    inputElement.value = '';
    renderTodoList();
    localStorage.setItem('todoList', JSON.stringify(todoList));
}