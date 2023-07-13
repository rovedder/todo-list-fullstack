const tasksModel = require('../models/tasksModel');

const getAll = async (_req, res) => {
    const tasks = await tasksModel.getAll();

    return res.status(200).json(tasks);
};

const create = async (req, res) => {
    const newTask = req.body;
    const createdTask = await tasksModel.create(newTask);

    return res.status(201).json(createdTask);
};

const deleteTask = async (req, res) => {
    const { id } = req.params;
    await tasksModel.deleteTask(id);

    return res.status(204).json();
};

const updateTask = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    await tasksModel.updateTask(id, body);

    return res.status(204).json();
};

module.exports = {
    getAll,
    create,
    deleteTask,
    updateTask
};