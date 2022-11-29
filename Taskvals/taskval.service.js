const config = require('config.json');
const db = require('_helpers/db');
const Taskval = db.Taskval;

module.exports = {
    updateTask,
    updateChargeCC,
    getTask,
};

async function updateTask(input) {
    const updatedTask = await Taskval.updateOne({ taskId: input.id }, {taskId: input.id, taskval: input.value, taskFieldName: "ActualBill"}, { new: true, upsert: true });
    return updatedTask;
}

async function updateChargeCC(input) {
    const updatedTask = await Taskval.updateOne({ taskId: input.id }, {taskId: input.id, chargeCC: input.charge}, { new: true, upsert: true });
    return updatedTask;
}

async function getTask(input) {
    const taskData = await Taskval.findOne({taskId: input.id})
    return taskData;
}