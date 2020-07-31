import newElement from '../rendering/newelement';
import listElements from '../rendering/listelements';

const Home = (() => {
  const home = listElements(
    newElement('div'),
    newElement(
      'p',
      'home-text mt-5',
      'Welcome to "<span class="inline-logo">ToDo List Application</span>"',
    ),
  );
  return home;
})();

export default Home;
