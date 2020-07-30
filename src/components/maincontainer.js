import newElement from '../rendering/newelement';
import nestElements from '../rendering/nestelements';

const mainContainer = (() => {
  const name = 'main-display';
  const create = () => {
    return newElement('div', 'col-md-9 ml-sm-auto col-lg-10 px-md-4', null, null, ['id', name]);
  };
  const display = (page) => {
    document.getElementById(name).innerHTML = '';
    document.getElementById(name).appendChild(page);
  };
  return { create, display };
})();

export default mainContainer;