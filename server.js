const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

// ✅ Serve calculator HTML on root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'calculator.html'));
});

// ✅ Addition
app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;
    res.json({ result: Number(num1) + Number(num2) });
});

// ✅ Subtraction
app.get('/sub', (req, res) => {
    const { num1, num2 } = req.query;
    res.json({ result: Number(num1) - Number(num2) });
});

// ✅ Multiplication
app.get('/mul', (req, res) => {
    const { num1, num2 } = req.query;
    res.json({ result: Number(num1) * Number(num2) });
});

// ✅ Division
app.get('/div', (req, res) => {
    const { num1, num2 } = req.query;

    if (Number(num2) === 0) {
        return res.json({ result: "Cannot divide by zero" });
    }

    res.json({ result: Number(num1) / Number(num2) });
});

// ✅ Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
