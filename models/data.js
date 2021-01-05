const mongoose = require("mongoose");

//Schema 
const employeeInfoSchema = mongoose.Schema({
    name: String,
    age: Number,
    positionName: String,
    salary: Number
});

// Model
const employeeInf = mongoose.model('employeeInformation', employeeInfoSchema);

module.exports = employeeInf;

