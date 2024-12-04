function formatString(equation){
    equation = JSON.stringify(equation);
    equation = equation.replace("{", "");
    equation = equation.replace("}", "");
    equation = equation.slice(7);
    equation = equation.replaceAll('"', "");

    return equation;
}

module.exports = { formatString };