const express = require('express');
const router = express.Router();
const taskvalService = require('./taskval.service');

// routes
router.post('/update', updateTaskval);
router.post('/updateCharge', updateChargeCC);
router.post('/get', getTaskval);

module.exports = router;

function updateTaskval(req, res, next) {
    taskvalService.updateTask(req.body)
        .then(taskData => taskData ? res.json(taskData) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

function updateChargeCC(req, res, next) {
    taskvalService.updateChargeCC(req.body)
        .then(taskData => taskData ? res.json(taskData) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

function getTaskval(req, res, next) {
    taskvalService.getTask(req.body)
        .then(taskData => taskData ? res.json(taskData) : res.status(200).json({ message: 'There is not data' }))
        .catch(err => next(err));
}