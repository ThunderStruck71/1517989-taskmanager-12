import {createMenuTempate} from "./view/site-menu.js";
import {createFilterTemplate} from "./view/filter.js";
import {createBoardTemplate} from "./view/board.js";
import {createSortingTemplate} from "./view/sorting.js";
import {createTaskEditTemplate} from "./view/task-edit.js";
import {createTaskTemplate} from "./view/task.js";
import {createLoadMoreButtonTemplate} from "./view/load-more-button.js";
import {generateRandomTask} from "./mock/task.js";
import {generateTasksFilter} from "./mock/filter.js";
import {render} from "./utils.js";

const TASKS_COUNT = 8;

const tasks = new Array(TASKS_COUNT).fill().map(generateRandomTask);
const tasksFilter = generateTasksFilter(tasks);

const mainElement = document.querySelector(`.main`);
const mainSectionElement = mainElement.querySelector(`.main__control`);

render(mainSectionElement, createMenuTempate(), `beforeend`);
render(mainElement, createFilterTemplate(tasksFilter), `beforeend`);
render(mainElement, createBoardTemplate(), `beforeend`);

const boardElement = document.querySelector(`.board`);
const taskListElement = document.querySelector(`.board__tasks`);

render(boardElement, createSortingTemplate(), `afterbegin`);

render(taskListElement, createTaskEditTemplate(tasks[0]), `beforeend`);

for (let i = 1; i < TASKS_COUNT; i++) {
  render(taskListElement, createTaskTemplate(tasks[i]), `beforeend`);
}

render(boardElement, createLoadMoreButtonTemplate(), `beforeend`);
