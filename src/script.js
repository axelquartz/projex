const createProjectBtn = document.querySelector('.create-project button');
const projectName = document.querySelector('.project-container h2');
const projectDescription = document.querySelector('.project-container p');
const startProjectBtn = document.querySelector('.inactive-button');
const createTaskBtn = document.querySelector('.create-task button');
const taskName = document.querySelector('.task h3');
const taskDescription = document.querySelector('.task p');
const taskCompletion = document.querySelector('.task input');

class Project {
    constructor(name, description, dueDate, tasks) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.tasks = tasks;
    }
}

class Task {
    constructor(name, description, completed) {
        this.name = name;
        this.description = description;
        this.completed = completed;
    }
}

