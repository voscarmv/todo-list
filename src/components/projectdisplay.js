import newElement from '../rendering/newelement';
import listElements from '../rendering/listelements';
import nestElements from '../rendering/nestelements';

const projectDisplay = (project) => {
  const tasksListHTML = [];
  project.getTasks().forEach(project => {
    tasksListHTML.push(
      nestElements(
        newElement('li', 'nav-item'),
        newElement('a', 'nav-link', project.name, null, ['href', '#']),
      ),
    );
  });

  const taskspage = nestElements(
    newElement('div'),
    newElement('h1', null, project.name),
    listElements(
      newElement('ul', 'nav flex-column'),
      ...tasksListHTML,
    ),
  );
  return taskspage;
};

export default projectDisplay;
