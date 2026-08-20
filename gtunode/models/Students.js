const mongoose = require('mongoose');

const StudentsSchema = mongoose.Schema({
    sname:String,
    rollno:Number,
    details:String,
});

// module.exports = mongoose.model('Students', StudentsSchema);
var StudentsModel = mongoose.model('Students', StudentsSchema);
exports = StudentsModel;