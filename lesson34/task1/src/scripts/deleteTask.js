import { setItem } from "./storage.js";
import { deleteTask } from "./tasksGateway.js";
import { getTasksList } from "./tasksGateway.js";
import { renderTasks } from "./renderer.js";

export const onDeleteTask = (e) => {
  const isDeleteBtn = e.target.classList.contains("list-item__delete-btn");

  if (!isDeleteBtn) return;

  const parent = e.target.closest(".list-item");
  const checkbox = parent.querySelector(".list-item__checkbox");
  const taskId = checkbox.dataset.id;
  deleteTask(taskId)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem("tasksList", newTasksList);
      renderTasks();
    });
};
