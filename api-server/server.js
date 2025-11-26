// server.js

// 1. Import necessary packages
const express = require('express');
const cors = require('cors');

// 2. Initialize the app
const app = express();
const PORT = 5000; // Choose a port that is NOT your React app's port (usually 3000)

// 3. Use middleware
app.use(cors());       // Allows cross-origin requests from your frontend
app.use(express.json()); // Allows the server to read JSON data from client requests

// 4. Define the API Endpoint (The "Hello World" of your API)
app.get('/api/status', (req, res) => {
    // This is the data the server sends back to the frontend
    res.json({
        message: 'Server is running! Data provided by Node.js backend.',
        code: 200,
        backend_language: 'JavaScript/Node.js'
    });
});

// 5. Start the server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    console.log(`Test endpoint at: http://localhost:${PORT}/api/status`);
});