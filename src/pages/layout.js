import NavBar from '../components/navbar';
import Footer from '../components/footer';
import mainContainer from '../components/maincontainer';

const Layout = (container, sidebar, content) => {
  const main = mainContainer.create();
  main.appendChild(sidebar);
  main.appendChild(content);
  container.innerHTML = '';
  container.appendChild(NavBar());
  container.appendChild(main);
  container.appendChild(Footer());
  return container;
};

export default Layout;