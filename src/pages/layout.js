import NavBar from '../components/navbar';
import Footer from '../components/footer';
import mainContainer from '../components/maincontainer';
import Sidebar from '../components/sidebar';
import nestElements from '../rendering/nestelements';
import listElements from '../rendering/listelements';
import newElement from '../rendering/newelement';

const Layout = (container, projects, content) => {
  const main = mainContainer.create();
  main.appendChild(content);
  container.innerHTML = '';
  container.appendChild(NavBar());
  container.appendChild(
    nestElements(
      newElement('div', 'container-fluid', null, null, ['id', name]),
      listElements(
        newElement('div', 'row'),
        Sidebar(projects),
        main,
      )
    )
  );
  container.appendChild(Footer());
  return container;
};

export default Layout;