// back-end logic

var kilograms = function(number1) {
  return number1 * 0.453592;
};

var liters = function(number1) {
  return number1 * 3.78541;
};

var grams = function(number1) {
  return number1 * 28.3495;
};

var celsius = function(number1) {
  return ((5 * (number1-32)/9));
};

// front-end logic

$(document).ready(function() {
  $("form#pounds").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#pounds1").val());
    var result = kilograms(number1);
    $("#outputPounds").text(result + " kilograms");

  });

  $("form#subtract").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#subtract1").val());
    var number2 = parseInt($("#subtract2").val());
    var result = subtract(number1, number2);
    $("#outputSubtract").text(result);
  });

  $("form#multiply").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#multiply1").val());
    var number2 = parseInt($("#multiply2").val());
    var result = multiply(number1, number2);
    $("#outputMultiply").text(result);
  });

  $("form#divide").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#divide1").val());
    var number2 = parseInt($("#divide2").val());
    var result = divide(number1, number2);
    $("#outputDivide").text(result);
  });
});
