
const express = require('express');
const cors = require('cors');
const landingData = require('./routes/landingData.json');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Landing page API
app.get('/api/landing', (req, res) => {
	res.json(landingData);
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

