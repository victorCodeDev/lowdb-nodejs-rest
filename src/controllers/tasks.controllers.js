const { getConnection } = require('../database');
const { v4 } = require('uuid');
const getTasks = (req, res) => {
    const tasks = getConnection().get('tasks').value();
    res.json(tasks);
};

const getTaskById = (req, res) => {
    const task = getConnection().get('tasks').find({ id: req.params.id }).value();
    res.json(task);
};

const createTask = (req, res) => {
    const newTask = {
        id: v4(),
        name: req.body.name,
        description: req.body.description
    }
    getConnection().get('tasks').push(newTask).write();
    res.send(newTask);
};

const updateTask = async (req, res) => {
    const result = await getConnection().get('tasks').find({ id: req.params.id })
        .assign(req.body)
        .write();
    res.json(result);
};

const deleteTask = (req, res) => {
    const result = getConnection().get('tasks').find({ id: req.params.id }).write();
    res.json(result);
};

module.exports = { getTasks, getTaskById, createTask, updateTask, deleteTask }