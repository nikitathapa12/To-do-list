document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');
    const icon = document.querySelector('.icon');
    let currMode = 'Light';
    const body = document.querySelector('body');
  
    icon.addEventListener('click', () => {
      if (currMode === 'Light') {
        currMode = 'dark';
        body.classList.add('dark');
        body.classList.remove('light');
      } else {
        currMode = 'Light';
        body.classList.add('light');
        body.classList.remove('dark');
      }
      console.log(currMode);
    });
  
    addTaskButton.addEventListener('click', () => {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;
  
        const deleteButton = document.createElement('span');
        deleteButton.innerHTML = '<i class="ri-delete-bin-line"></i>';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', () => {
          taskList.removeChild(li);
        });
  
        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = '';
      }
    });
  });
  