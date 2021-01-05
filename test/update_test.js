// const mocha = require('mocha');
const assert = require('assert');
const emplyeeSchema = require("../models/data");

describe("Updating records", () => {
    let testEmplyee;
    beforeEach( (done)=> {
        testEmplyee = new emplyeeSchema({
            "name": 'As-har',
            "age": 24,
            "positionName": "Junior software developer",
            "salary": 100,
        });
        testEmplyee.save().then(() => {
            done();
        });
    });

    it('Updates the name of a record', function (done) {
        emplyeeSchema.findOneAndUpdate({ name: 'As-har' }, { name: 'Ashar' }).then(()=> {
            emplyeeSchema.findOne({ _id: testEmplyee._id }).then( (result)=>{
                assert(result.name === 'Ashar');
                done();
            });
        });
    });

    it('Adds 50 JOD to the salary of every record', function (done) {
        emplyeeSchema.update({}, { $inc: { salary: 50 } }).then(()=> {
            emplyeeSchema.findOne({ name: 'As-har' }).then((record)=>{
                assert(record.salary === 150);
                done();
            });
        });
    });
});