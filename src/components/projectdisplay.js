import newElement from '../rendering/newelement';
import listElements from '../rendering/listelements';
import mainContainer from './maincontainer';
import storageManager from '../classes/storagemanager';

const projectDisplay = (project) => {
  const priorityText = ['Low', 'Normal', 'High'];

  const selectedStatus = (priority, check) => {
    if (parseInt(priority, 10) === check) {
      return ['selected', 'selected'];
    }
    return null;
  };

  const taskForm = (tasktitle, description, duedate, priority, save) => listElements(
    newElement('div', 'page contact d-flex flex-column'),
    newElement('h1', 'contact-title', 'Contact'),
    newElement('p', 'contact-text', 'New task'),
    listElements(
      newElement('form'),
      listElements(
        newElement('div', 'form-group'),
        newElement('label', null, 'Title:', null, ['for', 'title_task']),
        newElement('input', 'form-control', null, null, ['id', 'title_task'], ['placeholder', 'Title task'], ['value', tasktitle]),
      ),
      listElements(
        newElement('div', 'form-group'),
        newElement('label', null, 'Description:', null, ['for', 'description_task']),
        newElement('input', 'form-control', null, null, ['id', 'description_task'], ['placeholder', 'A little description of the task'], ['value', description]),
      ),
      listElements(
        newElement('div', 'form-group'),
        newElement('label', null, 'Due date:', null, ['for', 'duedate_task']),
        newElement('input', 'form-control', null, null, ['id', 'duedate_task'], ['type', 'date'], ['value', duedate]),
      ),
      listElements(
        newElement('div', 'form-group'),
        newElement('label', null, 'Priority:', null, ['for', 'priority_task']),
        listElements(
          newElement('select', 'form-control', null, null, ['id', 'priority_task']),
          newElement('option', null, 'Low', null, ['value', '1'], selectedStatus(priority, 1)),
          newElement('option', null, 'Normal', null, ['value', '2'], selectedStatus(priority, 2)),
          newElement('option', null, 'High', null, ['value', '3'], selectedStatus(priority, 3)),
        ),
      ),
      newElement(
        'button',
        'btn btn-primary',
        'Save',
        save,
      ),
    ),
  );

  const editTask = (project, task) => {
    const edittask = taskForm(
      task.getTitle(),
      task.getDescription(),
      task.getDueDate(),
      task.getPriority(),
      () => {
        storageManager.editRenderTask(
          project,
          task,
          document.getElementById('title_task').value,
          document.getElementById('priority_task').value,
          document.getElementById('description_task').value,
          document.getElementById('duedate_task').value,
        );
        mainContainer.display(projectDisplay(project));
      },
    );
    return edittask;
  };

  const NewTask = (project) => {
    const newtask = taskForm(
      '', '', '', 1,
      () => {
        storageManager.addRenderTask(
          project,
          document.getElementById('priority_task').value,
          document.getElementById('description_task').value,
          document.getElementById('duedate_task').value,
        );
        mainContainer.display(projectDisplay(project));
      },
    );

    return newtask;
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
          newElement(
            'button',
            'btn btn-sm btn-danger',
            'Remove',
            () => {
              storageManager.removeTask(project, task);
              mainContainer.display(projectDisplay(project));
            },
          ),
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
