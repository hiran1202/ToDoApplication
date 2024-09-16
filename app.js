document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    // Function to add a new task
    function addTask(task) {
        if (task.trim() === '') return;

        const li = document.createElement('li');
        li.textContent = task;

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-btn';
        deleteButton.addEventListener('click', () => {
            li.remove();
        });

        li.appendChild(deleteButton);
        todoList.appendChild(li);
    }

    // Event listener for the form submit
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const task = input.value;
        addTask(task);
        input.value = '';
    });
});
