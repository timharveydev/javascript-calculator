function calc() {
  var a = parseFloat(document.getElementById('value1').value);//stores value 1 from site
  var b = parseFloat(document.getElementById('value2').value);//stores value 2 from site
  var op = document.getElementById('operator').value;//stores chosen operator
  var calculation;//will store result here

//determines the correct calculation to perform based on the operator chosen on the site
  if (op == "add") {
    calculation = a + b;
  } else if (op == "sub") {
    calculation = a - b;
  } else if (op == "mul") {
    calculation = a * b;
  } else if (op == "div") {
    calculation = a / b;
  }

//if no numbers have been entered, or if letters have been entered; provides an error message
  if (isNaN(calculation)) {
    calculation = "Please enter two numbers";
  }

//writes the result of the calculation to the div with the ID 'result' in the HTML
  document.getElementById('result').innerHTML = calculation;
}
