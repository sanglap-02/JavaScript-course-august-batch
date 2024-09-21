const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON bodies

// Serve static files (HTML, CSS, etc.) from the "public" folder
app.use(express.static('public'));

// Mock data (in-memory array of users) database 
let users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' }
];

// GET: Retrieve all users
app.get('/users', (req, res) => {
    res.json(users);
});

// GET: Retrieve a specific user by ID
app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);

    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

// POST: Create a new user
app.post('/users', (req, res) => {
    const newUser = {
        id: users.length + 1, // Generate a new ID
        name: req.body.name
    };
    
    users.push(newUser);
    res.status(201).json(newUser);
});

// PUT: Update an existing user by ID
app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === userId);

    if (userIndex !== -1) {
        users[userIndex].name = req.body.name; // Update the user name
        res.json(users[userIndex]);
    } else {
        res.status(404).send('User not found');
    }
});

// DELETE: Delete a user by ID
app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === userId);

    if (userIndex !== -1) {
        users.splice(userIndex, 1); // Remove the user from the array
        res.status(204).send(); // No content response
    } else {
        res.status(404).send('User not found');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
