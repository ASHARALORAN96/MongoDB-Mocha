const assert = require('assert');
let emplyeeSchema = require("../models/data")

describe('Deleting records', function(){
    let testEmplyee;
    beforeEach(function(done){
        testEmplyee = new emplyeeSchema({
            "name": 'As-har',
            "age": 24,
            "positionName": "Junior software developer",
            "salary": 100
        });
        done();
    });
  
    // Create tests
    it('Deletes a record from the database', function(done){
        emplyeeSchema.findOneAndRemove({name: 'As-har'}).then(function(){
            emplyeeSchema.findOne({name: 'As-har'}).then(function(result){
          assert(result === null);
          done();
        });
      });
    });
  
  });