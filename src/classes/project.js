import Task from './task';

class Project {
  constructor(projectName, taskArray) {
    this.name = projectName;
    this.tasks = taskArray;
  }

  setTasks(tasksArray) {
    this.tasks = tasksArray;
  }

  addTask(taskName) {
    this.tasks = this.tasks || [];
    this.tasks.push(new Task(taskName));
  }

  getTasks() {
    return this.tasks;
  }

  getTask(number) {
    return this.tasks[number];
  }
}

export default Project;