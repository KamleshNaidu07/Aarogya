const express = require('express');
const bodyParser = require('body-parser');
const patientRoutes = require('./routes/patientRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/patients', patientRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/appointments', appointmentRoutes);




// Root endpoint
app.use('/', (req, res) => {
  res.send('Welcome to Aarogya Hospital Management Web Application');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
