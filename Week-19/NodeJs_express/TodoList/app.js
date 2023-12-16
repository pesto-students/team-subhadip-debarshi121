const express = require("express");
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const morgan = require('morgan');
const db = require('./db.json');

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(morgan('tiny'));

app.use(express.json());

app.get(`/tasks`, (req, res) => {
    fs.readFile('./db.json', (err, data) => {
        if (err) throw err;
        let tasks = JSON.parse(data);
        res.json({tasks})
    });   
});

app.get(`/tasks/:id`, (req, res) => {
    const task = db.find(obj => obj.id === req.params.id);

    if(!task){
        res.json({error: "Task not found!"});
    }

    res.json({task});
});

app.put(`/tasks/:id`, (req, res) => {
    const task = db.find(obj => obj.id === req.params.id);

    if(!task){
        res.json({error: "Task not found!"});
    }

    const index = db.indexOf(task);

    const updatedTask = {
        ...task,
        ...(req.body.title ? { title: req.body.title } : {}),
        ...(req.body.description ? { description: req.body.description } : {}),
        ...(req.body.completed ? { completed: req.body.completed } : {}),
    };

    db[index] = updatedTask;

    fs.writeFileSync('./db.json', JSON.stringify(db));

    res.json({updatedTask});
});

app.delete(`/tasks/:id`, (req, res) => {
    const filtered = db.filter(obj => obj.id !== req.params.id);

    fs.writeFileSync('./db.json', JSON.stringify(filtered));

    res.json({message: "Task deleted!"});
});

app.post(`/tasks`, (req, res) => {
    const newTask = {
        id: uuidv4(),
        title: req.body.title,
        description: req.body.description,
        completed: false
    };
    db.push(newTask);
    fs.writeFileSync('./db.json', JSON.stringify(db))
    res.json({task: newTask});
});

app.all(`*`, (req, res) => {
    res.json({
        error: "Not found!"
    });
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
