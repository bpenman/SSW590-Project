// Import the express router as shown in the lecture code
// Note: please do not forget to export the router!

const express = require('express');
const algebra = require('algebra.js');
const path = require('path');
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
    equation = JSON.stringify(equation);
    equation = equation.replace("{", "");
    equation = equation.replace("}", "");
    equation = equation.slice(7);
    equation = equation.replaceAll('"', "");


    let calculated = 0;
    try {
      // Evaluate the expression 
      if (equation.includes("=") && equation.includes("x")) {
        let splitEquation = equation.split("=");
        const lhs = algebra.parse(splitEquation[0].trim());
        const rhs = algebra.parse(splitEquation[1].trim());
        var combinedEquation = new Equation(lhs, rhs);
        var solution = combinedEquation.solveFor("x");
        console.log(`Result: ${solution.toString()}`);
        return res.status(200).json({ result: solution.toString() });
      }
      else {
        equation = equation.replaceAll("^", '**');
        calculated = eval(equation); // eval converts string to evaluated equation
        console.log(`Result: ${calculated}`); //delete when frontend works
        return res.status(200).json({ result: calculated });
      }
    } catch (error) {
      return res.status(200).json({ result: "Invalid equation. Please enter a valid mathematical expression." })
    }
  });


module.exports = router;