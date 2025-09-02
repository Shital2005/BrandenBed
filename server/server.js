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
const queriesRouter = require('./routes/queries');
const tasksRouter = require('./routes/tasks');

// Use routers for API endpoints
app.use('/api/properties', propertiesRouter);
app.use('/api/tenants', tenantsRouter);
app.use('/api/employees', employeesRouter);
app.use('/api/landing', landingRouter);
app.use('/api/payments', paymentsRouter);
app.use('/api/queries', queriesRouter);
app.use('/api/tasks', tasksRouter);

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
