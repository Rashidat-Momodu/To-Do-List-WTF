function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  const taskAddedSound = document.getElementById('taskAddedSound');

  const timeRegex = /\b\d{1,2}([ap]m)?\s*-\s*\d{1,2}([ap]m)?\b/;
  const isValidTime = timeRegex.test(taskInput.value.trim());

  if (isValidTime) {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${taskInput.value}</span>
      <div class="button-container">
        <button class="done-btn" onclick="toggleCompleted(this)">Done</button>
        <button class="not-done-btn" onclick="toggleCompleted(this)">Not Done</button>
        <button class="remove-btn" onclick="removeTask(this)">Remove</button>
      </div>
    `;
    taskList.appendChild(li);
    taskInput.value = '';
    taskAddedSound.play();
  } else {
    alert('Please enter a valid time range (e.g., 10am to 12pm)');
  }
}

function toggleCompleted(button) {
  const li = button.parentNode.parentNode;
  const doneButton = li.querySelector('.done-btn');
  const notDoneButton = li.querySelector('.not-done-btn');

  if (button === doneButton) {
    doneButton.classList.add('completed');
    notDoneButton.classList.remove('completed');
  } else if (button === notDoneButton) {
    notDoneButton.classList.add('completed');
    doneButton.classList.remove('completed');
  }
}

function removeTask(button) {
  const li = button.parentNode.parentNode;
  const taskRemovedSound = document.getElementById('taskRemovedSound');
  taskRemovedSound.play();
  li.parentNode.removeChild(li);
}




