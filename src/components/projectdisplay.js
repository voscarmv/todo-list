import newElement from '../rendering/newelement';
import listElements from '../rendering/listelements';
import mainContainer from './maincontainer';
// eslint-disable-next-line import/no-cycle
import NewTask from '../pages/newtask';
// eslint-disable-next-line import/no-cycle
import editTask from '../pages/edittask';
import Storage from '../classes/storage';

const projectDisplay = (project) => {
  const priorityText = ['Low', 'Normal', 'High'];

  const removeTask = (taskIndex) => {
    const projects = Storage.getProjects();
    const tasks = project.getTasks();
    tasks.splice(taskIndex, 1);
    tasks.forEach(
      (task, taskIndex) => {
        task.setIndex(taskIndex);
      },
    );
    project.setTasks(tasks);
    projects[project.getIndex()] = project;
    Storage.setProjects(projects);
    mainContainer.display(projectDisplay(project));
  };

  const tasksListHTML = [];
  project.getTasks().forEach(task => {
    tasksListHTML.push(
      listElements(
        newElement('tr'),
        newElement('td', null, task.getTitle()),
        newElement('td', null, task.getDescription()),
        newElement('td', null, task.getDueDate()),
        newElement('td', null, priorityText[task.getPriority() - 1]),
        listElements(
          newElement('td'),
          newElement(
            'button',
            'btn btn-sm btn-primary mx-2',
            'Edit',
            () => { mainContainer.display(editTask(project, task)); },
          ),
        ),
        listElements(
          newElement('td'),
          newElement('button', 'btn btn-sm btn-danger', 'Remove', () => removeTask(task.getIndex())),
        ),
      ),
    );
  });

  const taskspage = listElements(
    newElement('div'),
    newElement('h1', null, project.name),
    newElement('button', 'btn btn-primary mr-2', 'New task', () => { mainContainer.display(NewTask(project)); }),
    listElements(
      newElement('table', 'table mt-3'),
      listElements(
        newElement('thead', 'thead-dark'),
        listElements(
          newElement('tr'),
          newElement('th', null, 'TITLE'),
          newElement('th', null, 'DESCRIPTION'),
          newElement('th', null, 'DUE DATE'),
          newElement('th', null, 'PRIORITY'),
          newElement('th'),
          newElement('th'),
        ),
      ),
      listElements(
        newElement('tbody'),
        ...tasksListHTML,
      ),
    ),
  );

  return taskspage;
};

export default projectDisplay;
