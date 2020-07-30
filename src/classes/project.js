import Task from './task';

class Project {
  constructor(projectName) {
    this.name = projectName;
  }

  addTask(taskName) {
    this.tasks = this.tasks || [];
    this.tasks.push(new Task(taskName));
    return this.tasks;
  }
}

export default Project;