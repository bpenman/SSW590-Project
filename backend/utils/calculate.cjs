const algebra = require('algebra.js');
const { Equation, Expression } = algebra;

function calculate(equation){
    let calculated = 0;

    if (equation.includes("=") && equation.includes("x")) {
        let splitEquation = equation.split("=");
        const lhs = algebra.parse(splitEquation[0].trim());
        const rhs = algebra.parse(splitEquation[1].trim());
        var combinedEquation = new Equation(lhs, rhs);
        var solution = combinedEquation.solveFor("x");
        console.log(`Result: ${solution.toString()}`);
        return solution.toString();
      }
      else {
        equation = equation.replaceAll("^", '**');
        calculated = eval(equation); // eval converts string to evaluated equation
        return calculated;
      }
}

module.exports = { calculate };