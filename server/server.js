const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Simulated data access layer for each component
function getPropertiesAsync(callback) {
	const filePath = path.join(__dirname, 'data', 'properties.json');
	fs.readFile(filePath, 'utf-8', (err, raw) => {
		if (err) {
			console.error('Error reading properties.json:', err);
			return callback(err);
		}
		try {
			const data = JSON.parse(raw);
			callback(null, data);
		} catch (parseErr) {
			console.error('Error parsing properties.json:', parseErr);
			callback(parseErr);
		}
	});
}

	const tenantsPath = path.join(__dirname, 'data', 'tenants.json');
	const tenantsRaw = fs.readFileSync(tenantsPath, 'utf-8');
	return JSON.parse(tenantsRaw);
}

	const employeesPath = path.join(__dirname, 'data', 'employees.json');
	const employeesRaw = fs.readFileSync(employeesPath, 'utf-8');
	return JSON.parse(employeesRaw);
}

// Properties API
app.get('/api/properties', (req, res) => {
	getPropertiesAsync((err, data) => {
		if (err) {
			res.status(500).json({ error: 'Failed to load properties.' });
		} else {
			res.json(data);
		}
	});
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
	const landingPath = path.join(__dirname, 'data', 'landingData.json');
	const landingRaw = fs.readFileSync(landingPath, 'utf-8');
	return JSON.parse(landingRaw);
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

