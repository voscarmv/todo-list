import Task from './task';
import Storage from './storage';
import mainContainer from '../components/maincontainer';
import projectDisplay from '../components/projectdisplay';

const storageManager = (() => {
  const addRenderTask = (project, priority, description, duedate) => {
    const title = document.getElementById('title_task').value;
    const newTask = new Task(title);
    newTask.setPriority(priority);
    newTask.setDescription(description);
    newTask.setDueDate(duedate);
    project.addTask(newTask);
    const projects = Storage.getProjects();
    projects[project.getIndex()].addTask(newTask);
    Storage.setProjects(projects);
    mainContainer.display(projectDisplay(project));
  };

  return { addRenderTask };
})();

export default storageManager;