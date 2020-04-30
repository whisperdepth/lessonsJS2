const listElem = document.querySelector('.list');
const tasks = [
    { text: 'Buy milk', done: false, createDate: '2019-11-24T15:51:32.222Z', id: '1' },
    { text: 'Pick up Tom from airport', done: false, createDate: '2019-11-25T15:51:32.222Z', id: '2' },
    { text: 'Visit party', done: false, createDate: '2019-11-26T15:51:32.222Z', id: '3' },
    { text: 'Visit doctor', done: true, createDate: '2019-11-27T15:51:32.222Z', id: '4' },
    { text: 'Buy meat', done: true, createDate: '2019-11-28T15:51:32.222Z', id: '5' },
];
const renderTasks = tasksList => {
    listElem.innerHTML = '';
    const tasksElems = tasksList
        .slice()
        .sort((a, b) => a.done - b.done)
        .map(({ text, done, id }) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.setAttribute('data-id', id);
            checkbox.checked = done;
            checkbox.classList.add('list__item-checkbox');
            if (done) {
                listItemElem.classList.add('list__item_done');
            }
            listItemElem.append(checkbox, text);
            return listItemElem;
        });
    listElem.append(...tasksElems);
};
renderTasks(tasks);
const onToggleTask = e => {
    const isCheckbox = e.target.classList.contains('list__item-checkbox');
    
    if (!isCheckbox) {
        return;
    }
    const taskData = tasks.find(task => task.id === e.target.dataset.id);
    Object.assign(taskData, { done: e.target.checked });
    renderTasks(tasks);
};
const todoListElem = document.querySelector('.list');
todoListElem.addEventListener('click', onToggleTask);
const createBtnElem = document.querySelector('.create-task-btn');
const onCreateTask = () => {
    const taskTitleInputElem = document.querySelector('.task-input');
    const text = taskTitleInputElem.value;
    if (!text) {
        return;
    }
    taskTitleInputElem.value = '';
    tasks.push({
        text,
        done: false,
        createDate: new Date().toISOString(),
        id: Math.random().toString()
    });
    renderTasks(tasks);
};
createBtnElem.addEventListener('click', onCreateTask);