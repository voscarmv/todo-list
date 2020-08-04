import Project from './project';
import Task from './task';

const Storage = (() => {
  const getProjectsCopy = () => JSON.parse(localStorage.getItem('projects_array') || '[]').map(project => Object.assign(new Project(), project));

  const getProjects = () => {
    let projectIndex = 0;
    return JSON.parse(localStorage.getItem('projects_array') || '[]').map((project) => {
      const objProject = Object.assign(new Project(), project);
      objProject.setIndex(projectIndex);
      projectIndex += 1;
      const tasksArray = [];
      objProject.tasks = objProject.tasks || [];
      objProject.tasks.forEach(
        (task, taskIndex) => {
          const taskObject = Object.assign(new Task(), task);
          taskObject.setIndex(taskIndex);
          tasksArray.push(taskObject);
        },
      );
      objProject.tasks = tasksArray;
      return objProject;
    });
  };

  const setProjects = (projects) => {
    localStorage.clear();
    localStorage.setItem('projects_array', JSON.stringify(projects));
  };

  const addProject = (project) => {
    const projects = Storage.getProjects();
    projects.push(project);
    Storage.setProjects(projects);
  };

  return {
    getProjects, setProjects, addProject, getProjectsCopy,
  };
})();

export default Storage;