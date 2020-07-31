import Project from './project';
import Task from './task';

const Storage = (() => {
  const getProjectsCopy = () => JSON.parse(localStorage.getItem('projects_array') || '[]').map(project => Object.assign(new Project(), project));

  const getProjects = () => JSON.parse(localStorage.getItem('projects_array') || '[]').map((project) => {
    const objProject = Object.assign(new Project(), project);

    const lstTasks = JSON.parse(project.tasks || '[]').map(task => Object.assign(new Task(), task));

    objProject.tasks = lstTasks;

    return objProject;
  });

  const setProjects = (projects) => {
    localStorage.clear();
    localStorage.setItem('projects_array', JSON.stringify(projects));
  };

  return { getProjects, setProjects, getProjectsCopy };
})();

export default Storage;