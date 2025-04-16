const todoForm = document.getElementById('todoForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];


function renderTasks() {
    taskList.innerHTML = ''; 
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';
        li.innerHTML = `
            ${task.text}
            <div>
                <button onclick="toggleComplete(${index})">Selesai</button>
                <button onclick="deleteTask(${index})">Hapus</button>
            </div>
        `;
        taskList.appendChild(li);
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}
todoForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const newTask = {
        text: taskInput.value,
        completed: false
    };
    tasks.push(newTask);
    taskInput.value = '';
    renderTasks();
});
function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}
renderTasks();