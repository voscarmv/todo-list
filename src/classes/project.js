import Task from './task';

class Project {
  constructor(projectName, taskArray) {
    this.name = projectName;
    this.tasks = taskArray;
  }

  setTasks(tasksArray) {
    this.tasks = tasksArray;
  }

  addTask(task) {
    this.tasks = this.tasks || [];
    this.tasks.push(task);
  }

  getTasks() {
    return this.tasks || [];
  }

  getTask(number) {
    return this.tasks[number];
  }
}

export default Project;