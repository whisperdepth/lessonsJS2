import { setItem } from "./storage.js";
import { deleteTask } from "./tasksGateway.js";

export const onDeleteTask = (e) => {
  const isDeleteBtn = e.target.classList.contains("list-item__delete-btn");

  if (!isDeleteBtn) return;

  const taskId = e.target.dataset.id;
  deleteTask(taskId)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem("tasksList", newTasksList);
      renderTasks();
    });
};
