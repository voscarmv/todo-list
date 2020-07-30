const localStorage = (() => {
  const getProjects = () => {
    return JSON.parse(localStorage.getItem('projects_array') || '[]').map(project => Object.assign(new Project(), project));
  };

  const setProjects = (projects) => {
    localStorage.clear();
    localStorage.setItem('projects_array', JSON.stringify(projects));
  };

  return { getProjects, setProjects }
})();

export default localStorage;