const baseUrl = "https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks";

export const getTasksList = () =>
  fetch(baseUrl).then((response) => response.json());



export const getTaskById = (taskId) =>
  getTasksList().then((tasks) => tasks.find((task) => task.id == taskId));

/* console.log(getTaskById(2)); */