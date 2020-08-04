import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './styles/dashboard.css';
import Layout from './pages/layout';
import Home from './pages/home';
import pageBody from './components/pagebody';
import Storage from './classes/storage';
import Project from './classes/project';

let projectList = Storage.getProjects();
if (projectList.length === 0) {
  projectList.push(new Project('Default project'));
  Storage.setProjects(projectList);
  projectList = Storage.getProjects();
}
const pagecontent = (() => {
  const container = Layout(pageBody.create(), projectList, Home);
  return container;
})();

document.body.appendChild(pagecontent);
