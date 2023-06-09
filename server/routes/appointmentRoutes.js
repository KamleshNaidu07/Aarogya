const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

// Get all appointments
router.get('/', appointmentController.getAllAppointments);

// Get appointment by ID
router.get('/:id', appointmentController.getAppointmentById);

// Create a new appointment
router.post('/', appointmentController.createAppointment);

// Update appointment by ID
router.put('/:id', appointmentController.updateAppointment);

// Delete appointment by ID
router.delete('/:id', appointmentController.deleteAppointment);

module.exports = router;
