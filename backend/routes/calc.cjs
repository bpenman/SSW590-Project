// Import the express router as shown in the lecture code
// Note: please do not forget to export the router!

const express = require('express');
const algebra = require('algebra.js');
const path = require('path');
const { formatString } = require('../utils/formatString.cjs');
const {calculate} = require('../utils/calculate.cjs');

const { Equation, Expression } = algebra;
//import path from 'path';
//const __dirname = new URL('.', import.meta.url).pathname;
const router = express.Router();
router
  .route('/')
  .get(async (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/index.html'));
    return res.status(200);
  });
router
  .route('/calculator')
  .get(async (req, res) => {

    let equation = req.query;
    equation = formatString(equation);


    try {
      // Evaluate the expression 
      const calculated = calculate(equation);
      return res.status(200).json({ result: calculated });
    } catch (error) {
      return res.status(200).json({ result: "Invalid equation. Please enter a valid mathematical expression." })
    }
  });


module.exports = router;