import newElement from '../rendering/newelement';
import listElements from '../rendering/listelements';
import nestElements from '../rendering/nestelements';
import mainContainer from './maincontainer';
import NewTask from '../pages/newtask';

const projectDisplay = (project) => {
  const tasksListHTML = [];
  project.getTasks().forEach(task => {
    tasksListHTML.push(
      nestElements(
        newElement('li', 'nav-item'),
        newElement('a', 'nav-link', task.getTitle(), null, ['href', '#']),
      ),
    );
  });

  const taskspage = listElements(
    newElement('div'),
    newElement('h1', null, project.name),
    newElement('button', 'btn btn-primary', 'New task', () => { mainContainer.display(NewTask(project)); }),
    listElements(
      newElement('ul', 'nav flex-column'),
      ...tasksListHTML,
    ),
  );

  return taskspage;
};

export default projectDisplay;
