import newElement from '../rendering/newelement';
import nestElements from '../rendering/nestelements';

const mainContainer = (() => {
  const name = 'main-display';
  const create = () => {
    return nestElements(
      newElement('div', 'container-fluid'),
      newElement('div', 'row'),
    );
  };
  const display = (page) => {
    document.getElementById(name).innerHTML = '';
    document.getElementById(name).appendChild(page);
  };
  return { create, display };
})();

export default mainContainer;