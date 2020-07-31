import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './styles/dashboard.css';
import Layout from './pages/layout';
import Home from './pages/home';
import pageBody from './components/pagebody';
import Project from './classes/project';
import Task from './classes/task';
import Storage from './classes/storage';

const projectList = Storage.getProjects();
const pagecontent = (() => {
  const container = Layout(pageBody.create(), projectList, Home);
  return container;
})();

document.body.appendChild(pagecontent);
