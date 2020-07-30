import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './styles/dashboard.css';
import Layout from './pages/layout';
import Sidebar from './components/sidebar';
import Home from './pages/home';
import pageBody from './components/pagebody';
import Project from './classes/project';


const myProject1 = new Project('Project One');
const myProject2 = new Project('Project Two');
const myProject3 = new Project('Project Three');
const myProject4 = new Project('Project Four');

const projectList = [myProject1, myProject2, myProject3, myProject4];
const pagecontent = (() => {
  const container = Layout(pageBody.create(), Sidebar(projectList), Home);
  return container;
})();

document.body.appendChild(pagecontent);

// import Project from './classes/project';
// import Task from './classes/task';

// const myTask = new Task('Coding');
// myTask.setTitle('Design');
// myTask.setDescription('Designing a beautiful logo');
// const myTask2 = new Task('Deploy');
// const project = new Project('Project #1');

// project.addTask(myTask);
// project.addTask(myTask2);

// console.log(myTask);
// console.log(project.name);
// console.log(project.getTasks());
// console.log(project.getTask(1));