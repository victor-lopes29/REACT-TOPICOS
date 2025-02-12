import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

// Rotas
app.get('/', (req, res) => {
  res.send('API funcionando!');
});

module.exports = app;
