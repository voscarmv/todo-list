class Task {
  constructor(taskTitle) {
    this.title = taskTitle;
  }

  getTitle() {
    return this.title;
  }

  getDescription() {
    return this.description;
  }

  getPriority() {
    return this.priority;
  }

  getDueDate() {
    return this.duedate;
  }

  setTitle(taskTitle) {
    this.title = taskTitle;
  }

  setDescription(taskDescription) {
    this.description = taskDescription;
  }

  setPriority(taskPriority) {
    this.priority = taskPriority;
  }

  setDueDate(taskDueDate) {
    this.duedate = taskDueDate;
  }
}

export default Task;