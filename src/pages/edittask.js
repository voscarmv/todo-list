import newElement from '../rendering/newelement';
import listElements from '../rendering/listelements';
import Task from '../classes/task';
import Storage from '../classes/storage';
import mainContainer from '../components/maincontainer';
import projectDisplay from '../components/projectdisplay';

const editTask = (project, task) => {
  const editRenderTask = (project, task) => {
    const title = document.getElementById('title_task').value;
    const newTask = new Task(title);
    newTask.setPriority(document.getElementById('priority_task').value);
    newTask.setDescription(document.getElementById('description_task').value);
    newTask.setDueDate(document.getElementById('duedate_task').value);
    newTask.setIndex(task.getIndex());
    const projects = Storage.getProjects();
    const tasks = projects[project.getIndex()].getTasks();
    tasks[task.getIndex()] = newTask;
    project.setTasks(tasks);
    projects[project.getIndex()] = project;
    Storage.setProjects(projects);
    mainContainer.display(projectDisplay(project));
  };

  const selectedStatus = (priority, check) => {
    if (parseInt(priority, 10) === check) {
      return ['selected', 'selected'];
    }
    return null;
  };

  const edittask = listElements(
    newElement('div', 'page contact d-flex flex-column'),
    newElement('h1', 'contact-title', 'Contact'),
    newElement('p', 'contact-text', 'New task'),
    listElements(
      newElement('form'),
      listElements(
        newElement('div', 'form-group'),
        newElement('label', null, 'Title:', null, ['for', 'title_task']),
        newElement('input', 'form-control', null, null, ['id', 'title_task'], ['placeholder', 'Title task'], ['value', task.getTitle()]),
      ),
      listElements(
        newElement('div', 'form-group'),
        newElement('label', null, 'Description:', null, ['for', 'description_task']),
        newElement('input', 'form-control', null, null, ['id', 'description_task'], ['placeholder', 'A little description of the task'], ['value', task.getDescription()]),
      ),
      listElements(
        newElement('div', 'form-group'),
        newElement('label', null, 'Name:', null, ['for', 'duedate_task']),
        newElement('input', 'form-control', null, null, ['id', 'duedate_task'], ['type', 'date'], ['value', task.getDueDate()]),
      ),
      listElements(
        newElement('div', 'form-group'),
        newElement('label', null, 'Name:', null, ['for', 'priority_task']),
        listElements(
          newElement('select', 'form-control', null, null, ['id', 'priority_task']),
          newElement('option', null, 'Low', null, ['value', '1'], selectedStatus(task.getPriority(), 1)),
          newElement('option', null, 'Normal', null, ['value', '2'], selectedStatus(task.getPriority(), 2)),
          newElement('option', null, 'High', null, ['value', '3'], selectedStatus(task.getPriority(), 3)),
        ),

      ),
      newElement('button', 'btn btn-primary', 'Save', () => { editRenderTask(project, task); }),
    ),
  );
  return edittask;
};

export default editTask;