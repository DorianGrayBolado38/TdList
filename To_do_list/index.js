document.addEventListener('DOMContentLoaded', function () {
    let taskInput = document.getElementById('taskInput');
    let addTaskBtn = document.getElementById('addTaskBtn');
    let taskList = document.getElementById('taskList');
    let deletBtn = document.getElementById('DeletTask');

    addTaskBtn.addEventListener('click', function (event) {
        event.preventDefault(); // Evita o comportamento padrão do formulário

        let taskText = taskInput.value.trim(); // Obtém o valor do campo de entrada

        if (taskText !== '') { // Verifica se o valor não está vazio
            let taskItem = document.createElement('li'); // Cria um novo elemento de lista

            let checkbox = document.createElement('input'); // Cria um elemento de checkbox
            checkbox.type = 'checkbox'; // Define o tipo de input como checkbox
            checkbox.addEventListener('change', function () {
                if (checkbox.checked) {
                    taskItem.style.textDecoration = 'line-through'; // Define uma linha através do texto quando o checkbox é marcado
                } else {
                    taskItem.style.textDecoration = 'none'; // Remove a linha quando o checkbox é desmarcado
                }
            });

            let taskLabel = document.createElement('label'); // Cria um elemento de label para o texto da tarefa
            taskLabel.textContent = taskText; // Define o texto do label
            deletBtn.addEventListener('click', function (){
                taskList.removeChild(taskItem);
            });

            taskItem.appendChild(checkbox); // Adiciona o checkbox ao item da lista
            taskItem.appendChild(taskLabel); // Adiciona o label ao item da lista
            taskList.appendChild(taskItem); // Adiciona o item à lista
            deletBtn.appendChild(DeletTask);

            taskInput.value = ''; // Limpa o campo de entrada
        };
    });
});