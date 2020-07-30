import newElement from '../rendering/newelement';
import nestElements from '../rendering/nestelements';
import listElements from '../rendering/listelements';
import Home from '../pages/home';
import Menu from '../pages/menu';
import Contact from '../pages/contact';
import mainContainer from './maincontainer';
// import Logo from '../assets/img/loge.jpg';
import newImage from '../rendering/newimage';

const Navbar = () => {
  const navbar = listElements(
    newElement('nav', 'navbar navbar-expand-lg navbar-light fixed-top bg-white'),
    listElements(
      newElement('a', 'navbar-brand', null, () => { mainContainer.display(Home); }, ['href', '#']),
      // newImage(Logo, 'logo-img d-inline-block align-top mr-2'),
      newElement('span', 'logo', 'Title'),
    ),
    nestElements(
      newElement(
        'button',
        'navbar-toggler',
        null, null,
        ['type', 'button'],
        ['data-toggle', 'collapse'],
        ['data-target', '#navbarNav'],
        ['aria-controls', 'navbarNav'],
        ['aria-expanded', 'false'],
        ['aria-label', 'Toggle navigation'],
      ),
      newElement('span', 'navbar-toggler-icon'),
    ),
    nestElements(
      newElement('div', 'collapse navbar-collapse', null, null, ['id', 'navbarNav']),
      listElements(
        newElement('ul', 'navbar-nav'),
        nestElements(
          newElement('li', 'nav-item active'),
          newElement(
            'a',
            'nav-link dropdown-toggle',
            'Projects',
            () => { mainContainer.display(Home); },
            ['href', '#'],
            ['id', 'navbarDropdown'],
            ['role', 'button'],
            ['data-toggle', 'dropdown'],
            ['aria-haspopup','true'],
            ['aria-expanded','false']
          ),
          listElements(
            newElement('div', 'dropdown-menu', null, null, ['aria-labelledby','navbarDropdown']),
            newElement('a', 'dropdown-item', '+ New Project', ['href', '#']),
            newElement('a', 'dropdown-item', 'Project 2', ['href', '#']),
            newElement('a', 'dropdown-item', 'Project 3', ['href', '#']),
          ),
        ),
      ),
    ),
  );

/*

      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>

*/

  return navbar;
};

export default Navbar;
