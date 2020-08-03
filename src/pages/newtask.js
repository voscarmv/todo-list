import newElement from '../rendering/newelement';
import listElements from '../rendering/listelements';
// import storageManager from '../classes/storagemanager';
import Task from '../classes/task';
import Storage from '../classes/storage';
import mainContainer from '../components/maincontainer';
import projectDisplay from '../components/projectdisplay';

const NewTask = (project) => {
  const addRenderTask = (project, priority, description, duedate) => {
    const title = document.getElementById('title_task').value;
    const newTask = new Task(title);
    newTask.setPriority(priority);
    newTask.setDescription(description);
    newTask.setDueDate(duedate);
    project.addTask(newTask);
    project.tasks.forEach(
      (task, taskIndex) => {
        task.setIndex(taskIndex);
      },
    );
    const projects = Storage.getProjects();
    projects[project.getIndex()].addTask(newTask);
    Storage.setProjects(projects);
    mainContainer.display(projectDisplay(project));
  };

  const newtask = listElements(
    newElement('div', 'page contact d-flex flex-column'),
    newElement('h1', 'contact-title', 'New Task'),
    listElements(
      newElement('form'),
      listElements(
        newElement('div', 'form-group'),
        newElement('label', null, 'Title:', null, ['for', 'title_task']),
        newElement('input', 'form-control', null, null, ['id', 'title_task'], ['placeholder', 'Title task']),
      ),
      listElements(
        newElement('div', 'form-group'),
        newElement('label', null, 'Description:', null, ['for', 'description_task']),
        newElement('input', 'form-control', null, null, ['id', 'description_task'], ['placeholder', 'A little description of the task']),
      ),
      listElements(
        newElement('div', 'form-group'),
        newElement('label', null, 'Name:', null, ['for', 'duedate_task']),
        newElement('input', 'form-control', null, null, ['id', 'duedate_task'], ['type', 'date']),
      ),
      listElements(
        newElement('div', 'form-group'),
        newElement('label', null, 'Name:', null, ['for', 'priority_task']),
        listElements(
          newElement('select', 'form-control', null, null, ['id', 'priority_task']),
          newElement('option', null, 'Low', null, ['value', '1']),
          newElement('option', null, 'Normal', null, ['value', '2']),
          newElement('option', null, 'High', null, ['value', '3']),
        ),

      ),
      newElement(
        'button',
        'btn btn-primary',
        'Save',
        () => {
          addRenderTask(
            project,
            document.getElementById('priority_task').value,
            document.getElementById('description_task').value,
            document.getElementById('duedate_task').value,
          );
        },
      ),
    ),
  );
  return newtask;
};

export default NewTask;