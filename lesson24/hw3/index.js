const listElem = document.querySelector(".list");

const tasks = [
  {
    text: "Buy milk",
    done: false,
    createDate: new Date().toISOString(),
    doneDate: null,
    id: "1",
  },
  {
    text: "Pick up Tom from airport",
    done: false,
    createDate: new Date().toISOString(),
    doneDate: null,
    id: "2",
  },
  {
    text: "Visit party",
    done: false,
    createDate: new Date().toISOString(),
    doneDate: null,
    id: "3",
  },
  {
    text: "Visit doctor",
    done: true,
    createDate: new Date().toISOString(),
    doneDate: new Date().toISOString(),
    id: "4",
  },
  {
    text: "Buy meat",
    done: true,
    createDate: new Date().toISOString(),
    doneDate: new Date().toISOString(),
    id: "5",
  },
];

const compareTasks = (a, b) => {
  if (a.done - b.done !== 0) {
    return a.done - b.done;
  }
  if (a.done) {
    return new Date(b.doneDate) - new Date(a.doneDate);
  }
  return new Date(b.createDate) - new Date(a.createDate);
};

const renderTasks = (tasksList) => {
  listElem.innerHTML = "";
  const tasksElems = tasksList
    .slice()
    .sort(compareTasks)
    .map(mapTask);
    
  listElem.append(...tasksElems);
};

const mapTask = ({ text, done, id }) => {
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
};

renderTasks(tasks);

const onToggleTask = (e) => {
  const isCheckbox = e.target.classList.contains("list__item-checkbox");

  if (!isCheckbox) return;

  const taskData = tasks.find((task) => task.id === e.target.dataset.id);

  taskData.done = e.target.checked;
  taskData.done
    ? (taskData.doneDate = new Date().toISOString())
    : (taskData.doneDate = null);

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
    doneDate: null,
    id: Math.random().toString(),
  });
  renderTasks(tasks);
};

createBtnElem.addEventListener("click", onCreateTask);
