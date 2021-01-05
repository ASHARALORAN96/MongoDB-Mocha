


const mongoose = require("mongoose");


//connect wih MongoDB

mongoose.Promise = global.Promise

before((done) => { //mocha hook
    mongoose.connect("mongodb://localhost/asharDB", { useNewUrlParser: true});
    mongoose.connection.once('open', () => {
        console.log("the connection is success ^_^");
        done();

    }).on('error', (e) => {
        console.log("Error !", e);
    });
});

// Drop before save to avoid the duplicate 
beforeEach((done)=> {
    mongoose.connection.collections.employeeinformations.drop(()=>{
        done();
    })
})
