import newElement from '../rendering/newelement';
import listElements from '../rendering/listelements';
import nestElements from '../rendering/nestelements';

const Sidebar = (projects) => {
  const projectListHTML = [];
  projects.forEach(project => {
    projectListHTML.push(
      nestElements(
        newElement('li', 'nav-item'),
        newElement('a', 'nav-link', project.name, null, ['href', '#']),
      ),
    );
  });

  const sidebar = nestElements(
    newElement('nav', 'col-md-3 col-lg-2 d-md-block bg-light sidebar collapse', null, null, ['id', 'sidebar-menu']),
    newElement('div', 'sidebar-sticky pt-3'),
    listElements(
      newElement('ul', 'nav flex-column'),
      nestElements(
        newElement('li', 'nav-item'),
        newElement('a', 'nav-link active', 'NEW PROJECT +', null, ['href', '#']),
      ),
      ...projectListHTML,
    ),
  );
  return sidebar;
};

export default Sidebar;
