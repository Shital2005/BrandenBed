const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Import routers
const propertiesRouter = require('./routes/properties');
const tenantsRouter = require('./routes/tenants');
const employeesRouter = require('./routes/employees');
const landingRouter = require('./routes/landing');
	const paymentsRouter = require('./routes/payments');

// Use routers for API endpoints
app.use('/api/properties', propertiesRouter);
app.use('/api/tenants', tenantsRouter);
app.use('/api/employees', employeesRouter);
app.use('/api/landing', landingRouter);
	app.use('/api/payments', paymentsRouter);

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
