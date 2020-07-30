import newElement from '../rendering/newelement';
import nestElements from '../rendering/nestelements';

const Footer = () => {
  const footer = nestElements(
    newElement('footer', 'footer bg-white'),
    newElement('div', 'container', 'Footer'),
  );
  return footer;
};

export default Footer;