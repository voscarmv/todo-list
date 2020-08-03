import newElement from '../rendering/newelement';
import listElements from '../rendering/listelements';
import nestElements from '../rendering/nestelements';
import storageManager from '../classes/storagemanager';
import mainContainer from '../components/maincontainer';
import projectDisplay from '../components/projectdisplay';

const newProject = (() => {
  const Sidebar = (() => {
    const name = 'sidebar-menu';

    const create = (projects) => {
      const projectListHTML = [];
      projects.forEach(project => {
        projectListHTML.push(
          nestElements(
            newElement('li', 'nav-item'),
            newElement('a', 'nav-link', project.name, () => { mainContainer.display(projectDisplay(project)); }, ['href', '#']),
          ),
        );
      });

      const sidebar = nestElements(
        newElement('nav', 'col-md-3 col-lg-2 d-md-block bg-light sidebar collapse', null, null, ['id', name]),
        newElement('div', 'sidebar-sticky pt-3'),
        listElements(
          newElement('ul', 'nav flex-column'),
          nestElements(
            newElement('li', 'text-center mb-3'),
            newElement('btn', 'btn btn-sm btn-info', 'NEW PROJECT +', () => { mainContainer.display(newProject); }, ['href', '#']),
          ),
          ...projectListHTML,
        ),
      );
      return sidebar;
    };

    const display = (projects) => {
      document.getElementById(name).innerHTML = '';
      document.getElementById(name).appendChild(create(projects));
    };
    return { create, display };
  })();

  const newproject = listElements(
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
      newElement(
        'button',
        'btn btn-primary',
        'Save',
        () => {
          Sidebar.display(storageManager.addRenderProject(document.getElementById('project_name').value));
        },
      ),
    ),
  );
  return newproject;
})();

export default newProject;