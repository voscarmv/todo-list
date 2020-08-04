import newElement from '../rendering/newelement';
import listElements from '../rendering/listelements';
import nestElements from '../rendering/nestelements';
import projectDisplay from './projectdisplay';
import mainContainer from './maincontainer';
import newProject from '../pages/newproject';

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

export default Sidebar;
