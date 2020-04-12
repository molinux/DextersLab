const express = require('express');

const server = express();

server.use(express.json());

const projects = [];


// Global Middleware to count requests
server.use((req, res, next) => {
  console.log(`Método: ${req.method}; URL: ${req.url}`);
  console.count('Requisição número' );

  next();
})

// Middleware to check if project exists
function checkProjectExists(req, res, next) {
  const { id } = req.params;

  const project = projects.find(p => p.id == id);

  if(!project) {
    return res.status(400).json({ error: 'Project does not exists.'});
  }

  return next();
}


// Register a new project inside an array 
// Array structure: id, title, tasks
server.post('/projects', (req, res) => {
  const { id, title } = req.body;

  const project = {
    id,
    title,
    tasks: []
  };

  projects.push(project);

  return res.json(project);
});

// List an specifit project by a given id
server.get('/projects/:id', checkProjectExists, (req, res) => {
  const { id } = req.params;

  const project = projects.find(p => p.id == id);

  return res.json(project);
});

// List all the projects
server.get('/projects', (req, res) =>{
  return res.json(projects);
});

// Change project´s name
server.put('/projects/:id', checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

 const project = projects.find(p => p.id == id);

 project.title = title;

  return res.json(project);
});

// Exclude a project
server.delete('/projects/:id', checkProjectExists, (req, res) => {
  const { id } = req.params;

  const projectIndex = (p => p.id == id);

  projects.splice(projectIndex, 1);

  return res.send();
});

// Add a task to a project
server.post('/projects/:id/tasks', checkProjectExists, (req, res) => {
  const { title } = req.body;
  const { id } = req.params;

  const project = projects.find(p => p.id == id);

  project.tasks.push(title);

  return res.json(project);
})

server.listen(3000);