import Project from './project';
import Task from './task';

const Storage = (() => {
  const getProjectsCopy = () => JSON.parse(localStorage.getItem('projects_array') || '[]').map(project => Object.assign(new Project(), project));

  const getProjects = () => JSON.parse(localStorage.getItem('projects_array') || '[]').map((project) => {
    const objProject = Object.assign(new Project(), project);
    console.log(objProject);
    console.log(objProject.tasks);

    const lstTasks = JSON.parse(objProject.tasks || '[]').map(task => Object.assign(new Task(), task));

    console.log('tasks convertidas');
    objProject.tasks = lstTasks;

    return objProject;
  });

  const setProjects = (projects) => {
    localStorage.clear();
    localStorage.setItem('projects_array', JSON.stringify(projects));
  };

  const addProject = (project) => {
    const projects = Storage.getProjects();
    projects.push(project);
    Storage.setProjects(projects);
  };

  return { getProjects, setProjects, addProject, getProjectsCopy };
})();

export default Storage;