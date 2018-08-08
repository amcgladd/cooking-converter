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

  $("form#gallons").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#gallons1").val());
    var result = liters(number1);
    $("#outputGallons").text(result + " liters");
  });

  $("form#ounces").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#ounces1").val());
    var result = grams(number1);
    $("#outputOunces").text(result + " grams");
  });

  $("form#temp").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#temp1").val());
    var result = celsius(number1);
    $("#outputTemp").text(result + " degrees Celsius");
  });
});
