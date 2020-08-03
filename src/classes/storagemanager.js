import Project from './project';
import Task from './task';
import Storage from './storage';

const storageManager = (() => {
  const addRenderProject = (name) => {
    Storage.addProject(new Project(name, []));
    return Storage.getProjects();
  };

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
  };

  const editRenderTask = (project, task, tasktitle, priority, description, duedate) => {
    const title = tasktitle;
    const newTask = new Task(title);
    newTask.setPriority(priority);
    newTask.setDescription(description);
    newTask.setDueDate(duedate);
    newTask.setIndex(task.getIndex());
    const projects = Storage.getProjects();
    const tasks = projects[project.getIndex()].getTasks();
    tasks[task.getIndex()] = newTask;
    project.setTasks(tasks);
    projects[project.getIndex()] = project;
    Storage.setProjects(projects);
  };

  const removeTask = (project, task) => {
    const projects = Storage.getProjects();
    const tasks = project.getTasks();
    tasks.splice(task.getIndex(), 1);
    tasks.forEach(
      (task, taskIndex) => {
        task.setIndex(taskIndex);
      },
    );
    project.setTasks(tasks);
    projects[project.getIndex()] = project;
    Storage.setProjects(projects);
  };

  return {
    addRenderTask, editRenderTask, removeTask, addRenderProject,
  };
})();

export default storageManager;