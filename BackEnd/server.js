//Now all working :))
const express = require('express')
const app = express()
const port = 4000
var bodyParser = require('body-parser')

app.get('/api/grade', (req, res) => {
  studentModel.find((error, data) => {
    console.log(data);
    res.json(data);
  })
})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//mongodb+srv://admin:<password>@cluster0.8taek.mongodb.net/?retryWrites=true&w=majority
// getting-started.js
const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
  // await mongoose.connect('mongodb+srv://admin:admin@cluster0.gr3hrrm.mongodb.net/?retryWrites=true&w=majority');
  await mongoose.connect('mongodb+srv://admin:admin@grades.mfwjkvm.mongodb.net/?retryWrites=true&w=majority');
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}


const GradeSchema = new mongoose.Schema({
  student: String,
  module: String,
  asst1: String,
  asst2: String,
  project: String
});

// Compile model from schema
const studentModel = mongoose.model('STUDENTS', GradeSchema);

app.post('/api/grades', (req, res) => {
  console.log(req.body);
  console.log("In post grades");

  studentModel.create({
    student: req.body.student,
    module: req.body.module,
    asst1: req.body.asst1,
    asst2: req.body.asst2,
    project: req.body.project
  })

  res.send('Data Recieved');
})

//getting all students
app.get('/api/grades', (req, res) => {
  studentModel.find((error, data) => {
    res.json(data);
  })
})

//getting one by id
app.get('/api/grade/:id', (req, res) => {
  console.log(req.params.id);
  studentModel.findById(req.params.id, (error, data) => {
    res.json(data);
  })
})

// updating one by id
app.put('/api/grade/:id', (req, res) => {
  console.log("Update: " + req.params.id);

  studentModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
    (error, data) => {
      res.send(data);
    })
})

//deleting one by id
app.delete('/api/grade/:id', (req, res) => {
  console.log('Deleting: ' + req.params.id);
  studentModel.findByIdAndDelete({ _id: req.params.id }, (error, data) => {
    res.send(data);
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


