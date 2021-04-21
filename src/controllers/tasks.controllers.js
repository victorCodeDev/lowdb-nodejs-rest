const getTasks = (req, res) => {
    res.send('getTasks');
};

const getTaskById = (req, res) => {
    res.send('getTaskById');
};

const createTask = (req, res) => {
    res.send('createTask');
};

const updateTask = (req, res) => {
    res.send('updateTask');
};

const deleteTask = (req, res) => {
    res.send('deleteTask');
};

module.exports = { getTasks, getTaskById, createTask, updateTask, deleteTask }