import newElement from '../rendering/newelement';
import listElements from '../rendering/listelements';
import Storage from '../classes/storage';
import Project from '../classes/project';
// eslint-disable-next-line import/no-cycle
import Sidebar from '../components/sidebar';

const Contact = (() => {
  const addRenderProject = () => {
    const name = document.getElementById('project_name').value;
    Storage.addProject(new Project(name, []));
    const projects = Storage.getProjects();
    Sidebar.display(projects);
  };

  const contact = listElements(
    newElement('div', 'page contact d-flex flex-column'),
    newElement('h1', 'contact-title', 'New Project'),
    newElement('h3', 'contact-text', 'What do you want to do?'),
    listElements(
      newElement('form'),
      listElements(
        newElement('div', 'form-group'),
        newElement('label', null, 'Project Name:', null, ['for', 'project_name']),
        newElement('input', 'form-control', null, null, ['id', 'project_name'], ['placeholder', 'Enter project name here']),
      ),
      newElement('button', 'btn btn-primary', 'Save', () => { addRenderProject(); }),
    ),
  );
  return contact;
})();

export default Contact;