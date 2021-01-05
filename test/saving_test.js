// const mocha = require('mocha');
const assert = require('assert');
let emplyeeSchema = require("../models/data");

describe("test saving the emplyee data in MongoDB", () => {

    it('saving MongoDB data', (done) => {

        let testEmplyee = new emplyeeSchema({
            "name": 'As-har',
            "age": 24,
            "positionName": "Junior software developer",
            "salary": 100
        });
        testEmplyee.save().then(()=>{
            assert(!testEmplyee.isNew);
            done();
        });
    });
});