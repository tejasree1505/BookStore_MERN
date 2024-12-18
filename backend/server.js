const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Example route
app.get('/', (req, res) => {
    res.send('Backend is running!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
