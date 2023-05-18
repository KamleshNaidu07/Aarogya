const pool = require('../database');

const createPatient = async (patientData) => {
  try {
    const query = 'INSERT INTO patients SET ?';
    const [result] = await pool.query(query, patientData);
    return result.insertId;
  } catch (error) {
    throw new Error(error);
  }
};

const getAllPatients = async () => {
  try {
    const query = 'SELECT * FROM patients';
    const [rows] = await pool.query(query);
    return rows;
  } catch (error) {
    throw new Error(error);
  }
};

const getPatientById = async (patientId) => {
  try {
    const query = 'SELECT * FROM patients WHERE id = ?';
    const [rows] = await pool.query(query, [patientId]);
    return rows[0];
  } catch (error) {
    throw new Error(error);
  }
};

const updatePatientById = async (patientId, patientData) => {
  try {
    const query = 'UPDATE patients SET ? WHERE id = ?';
    await pool.query(query, [patientData, patientId]);
  } catch (error) {
    throw new Error(error);
  }
};

const deletePatientById = async (patientId) => {
  try {
    const query = 'DELETE FROM patients WHERE id = ?';
    await pool.query(query, [patientId]);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  createPatient,
  getAllPatients,
  getPatientById,
  updatePatientById,
  deletePatientById,
};
