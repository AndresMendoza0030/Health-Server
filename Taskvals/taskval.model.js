const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    taskId: { type: String, unique: true, required: true },
    taskval: { type: String },
    taskFieldName: { type: String },
    chargeCC: {type: Boolean},
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

module.exports = mongoose.model('Taskval', schema);