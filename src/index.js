import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './styles/dashboard.css';
import Layout from './pages/layout';
import Home from './pages/home';
import pageBody from './components/pagebody';
import Project from './classes/project';
import Task from './classes/task';
import Storage from './classes/storage';

const myProject1 = new Project('Project One');
for (let i = 0; i < 5; i += 1) {
  myProject1.addTask(new Task(`Task ${i + 1}`));
}
Storage.setProjects(myProject1);

const myProject2 = new Project('Project Two');
Storage.setProjects([myProject1, myProject2]);

const myProject3 = new Project('Project Three');
const myProject4 = new Project('Project Four');

const projectList = [myProject1, myProject2, myProject3, myProject4];
const pagecontent = (() => {
  const container = Layout(pageBody.create(), projectList, Home);
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

console.log(myProject1);
// console.log(project.name);
// console.log(project.getTasks());
// console.log(project.getTask(1));