const mongoose = require('mongoose')

const EmpSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const EmpModel = mongoose.model('emps', EmpSchema);

module.exports = EmpModel; 