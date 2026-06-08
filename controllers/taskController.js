const Task = require("../models/Task");

// CREATE TASK

const createTask = async (req, res) => {
  try {

    const { title, description } = req.body;

    const task = await Task.create({
      title,
      description,
      userId: req.user.id
    });

    res.status(201).json({
      success: true,
      task
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

// GET ALL TASKS

const getTasks = async (req, res) => {
  try {

    const tasks = await Task.find({
      userId: req.user.id
    }).sort({
      createdAt: -1
    });

    res.status(200).json({
      success: true,
      count: tasks.length,
      tasks
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

// GET SINGLE TASK

const getTaskById = async (req, res) => {
  try {

    const task = await Task.findOne({
      _id: req.params.id,
      userId: req.user.id
    });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task Not Found"
      });
    }

    res.status(200).json({
      success: true,
      task
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

// UPDATE TASK

const updateTask = async (req, res) => {
  try {

    const task = await Task.findOneAndUpdate(
      {
        _id: req.params.id,
        userId: req.user.id
      },
      req.body,
      {
        new: true
      }
    );

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task Not Found"
      });
    }

    res.status(200).json({
      success: true,
      task
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

// DELETE TASK

const deleteTask = async (req, res) => {
  try {

    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id
    });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task Not Found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Task Deleted"
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

// TOGGLE STATUS

const toggleTaskStatus = async (req, res) => {
  try {

    const task = await Task.findOne({
      _id: req.params.id,
      userId: req.user.id
    });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task Not Found"
      });
    }

    task.status =
      task.status === "Pending"
        ? "Completed"
        : "Pending";

    await task.save();

    res.status(200).json({
      success: true,
      task
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

module.exports = {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
  toggleTaskStatus
};