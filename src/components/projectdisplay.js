import newElement from '../rendering/newelement';
import listElements from '../rendering/listelements';
import nestElements from '../rendering/nestelements';
import mainContainer from './maincontainer';
// eslint-disable-next-line import/no-cycle
import NewTask from '../pages/newtask';
// eslint-disable-next-line import/no-cycle
import editTask from '../pages/edittask';

const projectDisplay = (project) => {
  const priorityText = ['Low', 'Normal', 'High'];

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
          newElement('button', 'btn btn-sm btn-danger', 'Remove'),
        ),
      ),
    );
  });

  const taskspage = listElements(
    newElement('div'),
    newElement('h1', null, project.name),
    newElement('button', 'btn btn-primary mr-2', 'New task', () => { mainContainer.display(NewTask(project)); }),
    newElement('button', 'btn btn-danger', 'Delete project', null),
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
