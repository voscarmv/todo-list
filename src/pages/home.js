import newElement from '../rendering/newelement';
import nestElements from '../rendering/nestelements';
import listElements from '../rendering/listelements';
import newImage from '../rendering/newimage';

const Home = (() => {
  const home = listElements(
    newElement('div', 'container page'),
    listElements(
      newElement('div', 'row'),
      listElements(
        newElement('div', 'col-6'),
        newElement(
          'p',
          'home-text',
          'Welcome to <span class="inline-logo">LOGO</span>',
        ),
      ),
    ),
  );
  return home;
})();

export default Home;
