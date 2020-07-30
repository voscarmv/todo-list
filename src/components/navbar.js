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
    newElement('nav', 'navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow'),
    listElements(
      newElement('a', 'navbar-brand col-md-3 col-lg-2 mr-0 px-3', null, () => { mainContainer.display(Home); }, ['href', '#']),
      // newImage(Logo, 'logo-img d-inline-block align-top mr-2'),
      newElement('span', 'logo', 'Title'),
    ),
  );


  /*
  <a class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Company name</a>
  */
  return navbar;
};

export default Navbar;
