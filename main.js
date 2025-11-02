const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

const GEMINI_API_KEY = 'AIzaSyBNM8B-3ZiuacyQ5D2B30_b_0wWE7e7N4s';

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/gemini', async (req, res) => {
    try {
        const response = await axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`, req.body, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch from Gemini API' });
    }
});

app.get('/api/neko', async (req, res) => {
    try {
        const { text, systemPrompt, sessionId } = req.query;
        const response = await axios.get('https://api.nekolabs.web.id/ai/gpt/4o-mini-search', {
            params: {
                text,
                systemPrompt,
                sessionId
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch from Neko API' });
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});