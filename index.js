fetch("https://dummyjson.com/todos")
  .then(response => response.json())
  .then(data => {
    const newTodo = document.getElementById("newTodo");
    const addTodoBtn = document.getElementById("addTodoBtn");
    const allTodosList = document.getElementById("allTodosList");
    const completedTodosList = document.getElementById("completedTodosList");
    const uncompletedTodosList = document.getElementById("uncompletedTodosList");

    addTodoBtn.addEventListener("click", function() {
      const listItem = document.createElement("li");
      listItem.innerHTML = newTodo.value;
      allTodosList.appendChild(listItem);
      uncompletedTodosList.appendChild(listItem.cloneNode(true));
      newTodo.value = "";
    });

    data.forEach(todo => {
      const listItem = document.createElement("li");
      listItem.innerHTML = todo.title;
      allTodosList.appendChild(listItem);

      if (todo.completed) {
        completedTodosList.appendChild(listItem.cloneNode(true));
      } else {
        uncompletedTodosList.appendChild(listItem.cloneNode(true));
      }
    });
  });
