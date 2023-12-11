import express from 'express';
import session from 'express-session';
import mongoose from "mongoose";
import bodyParser from "bodyparser";
const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const app = express();
mongoose.connect('mongodb://localhost:27017/ecommerce',{ 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});
app.use(express.json());
app.use('/products', productRoutes);
export default app;
