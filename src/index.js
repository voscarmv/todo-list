import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './styles/dashboard.css';
import Layout from './pages/layout';
import Sidebar from './components/sidebar';
import Home from './pages/home';
import pageBody from './components/pagebody';

const pagecontent = (() => {
  const container = Layout(pageBody.create(), Sidebar(), Home);
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