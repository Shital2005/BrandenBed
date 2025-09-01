const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Simulated data access layer for each component
function getProperties() {
	const filePath = path.join(__dirname, 'routes', 'properties.json');
	const raw = fs.readFileSync(filePath, 'utf-8');
	return JSON.parse(raw);
}

function getTenants() {
	const filePath = path.join(__dirname, 'routes', 'tenants.json');
	const raw = fs.readFileSync(filePath, 'utf-8');
	return JSON.parse(raw);
}

function getEmployees() {
	const filePath = path.join(__dirname, 'routes', 'employees.json');
	const raw = fs.readFileSync(filePath, 'utf-8');
	return JSON.parse(raw);
}

// Properties API
app.get('/api/properties', (req, res) => {
	try {
		const data = getProperties();
		res.json(data);
	} catch (err) {
		res.status(500).json({ error: 'Failed to load properties.' });
	}
});

// Tenants API
app.get('/api/tenants', (req, res) => {
	try {
		const data = getTenants();
		res.json(data);
	} catch (err) {
		res.status(500).json({ error: 'Failed to load tenants.' });
	}
});

// Employees API
app.get('/api/employees', (req, res) => {
	try {
		const data = getEmployees();
		res.json(data);
	} catch (err) {
		res.status(500).json({ error: 'Failed to load employees.' });
	}
});
function getLandingData() {
	const filePath = path.join(__dirname, 'routes', 'landingData.json');
	const raw = fs.readFileSync(filePath, 'utf-8');
	return JSON.parse(raw);
}

// Landing page API
app.get('/api/landing', (req, res) => {
	try {
		const data = getLandingData();
		res.json(data);
	} catch (err) {
		res.status(500).json({ error: 'Failed to load landing data.' });
	}
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

