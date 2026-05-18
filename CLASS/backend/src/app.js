import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send('Docker & AWS Understanding');
});

app.get('/api/data', (req, res) => {
    const data = {
        message: 'Hello from the API!',
        timestamp: new Date()
    };
    res.json(data);
});

export default app;