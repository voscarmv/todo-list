import newElement from '../rendering/newelement';
import listElements from '../rendering/listelements';
import Home from '../pages/home';
import mainContainer from './maincontainer';

const Navbar = () => {
  const navbar = listElements(
    newElement('nav', 'navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow'),
    listElements(
      newElement('a', 'navbar-brand col-md-3 col-lg-2 mr-0 px-3 text-center', null, () => { mainContainer.display(Home); }, ['href', '#']),
      newElement('span', 'logo', 'ToDo List'),
    ),
  );

  return navbar;
};

export default Navbar;
