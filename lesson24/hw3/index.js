const listElem = document.querySelector(".list");

const tasks = [
  {
    text: "Buy milk",
    done: false,
    createDate: new Date().toISOString(),
    id: "1",
  },
  {
    text: "Pick up Tom from airport",
    done: false,
    createDate: new Date().toISOString(),
    id: "2",
  },
  {
    text: "Visit party",
    done: false,
    createDate: new Date().toISOString(),
    id: "3",
  },
  {
    text: "Visit doctor",
    done: true,
    createDate: new Date().toISOString(),
    id: "4",
  },
  {
    text: "Buy meat",
    done: true,
    createDate: new Date().toISOString(),
    id: "5",
  },
];

const renderTasks = (tasksList) => {
  listElem.innerHTML = "";
  const tasksElems = tasksList
    .slice()
    .sort(
      (a, b) =>
        new Date(b.createDate).getTime() - new Date(a.createDate).getTime()
    )
    .sort((a, b) => a.done - b.done)
    .sort(
      (a, b) =>
        new Date(b.completeData).getTime() - new Date(a.completeData).getTime()
    )
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");
      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.setAttribute("data-id", id);
      checkbox.checked = done;
      checkbox.classList.add("list__item-checkbox");
      if (done) {
        listItemElem.classList.add("list__item_done");
      }
      listItemElem.append(checkbox, text);
      return listItemElem;
    });
  listElem.append(...tasksElems);
};

renderTasks(tasks);

const onToggleTask = (e) => {
  const isCheckbox = e.target.classList.contains("list__item-checkbox");

  if (!isCheckbox) {
    return;
  }
  const taskData = tasks.find((task) => task.id === e.target.dataset.id);

  Object.assign(taskData, { done: e.target.checked });
  if (taskData.done) {
    taskData.completeData = new Date().toISOString()
  }else{
    delete taskData.completeData;
  }
  renderTasks(tasks);
};

const todoListElem = document.querySelector(".list");
todoListElem.addEventListener("click", onToggleTask);

const createBtnElem = document.querySelector(".create-task-btn");
const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector(".task-input");
  const text = taskTitleInputElem.value;
  if (!text) {
    return;
  }
  taskTitleInputElem.value = "";
  tasks.push({
    text,
    done: false,
    createDate: new Date().toISOString(),
    id: Math.random().toString(),
  });
  renderTasks(tasks);
};

createBtnElem.addEventListener("click", onCreateTask);
