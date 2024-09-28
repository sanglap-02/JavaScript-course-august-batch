//npm install express mongoose body-parser
const port = 3000;
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Initialize express app
const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

// MongoDB Connection
// mongodb://localhost:27017/

mongoose.connect('mongodb://localhost:27017/myDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a Mongoose Schema
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const userSchema2=new mongoose.Schema({
    name : String,
    emial : String,
})

const UserModel2=mongoose.model('User2',userSchema2)

// Create a Model
const User = mongoose.model('User', userSchema);

// Routes
app.post('/add-user', async (req, res) => {
  const { name, age } = req.body;
  const newUser = new User({ name, age });
  await newUser.save();
  res.json({ message: 'User added successfully' });
});

app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Start Server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
