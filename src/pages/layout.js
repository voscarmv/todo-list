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
  const sidebar = Sidebar.create(projects);
  container.innerHTML = '';
  container.appendChild(NavBar());
  container.appendChild(
    nestElements(
      newElement('div', 'container-fluid'),
      listElements(
        newElement('div', 'row'),
        sidebar,
        main,
      ),
    ),
  );
  container.appendChild(Footer());
  return container;
};

export default Layout;