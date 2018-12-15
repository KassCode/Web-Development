var $ = function(id){
    return document.getElementById(id); //function that returns id of element
};

var ResetForm = function () {
  $("degrees-entered").value = "";
  $("degrees-computed").value = "";
  $("degrees-entered").focus;
};

var ConvertToFahrenheit = function () {
    $("degrees-top-label").firstChild.nodeValue = "Enter Celsius degrees:";
    $("degrees-bottom-label").firstChild.nodeValue = "Fahrenheit equivalent:";
    ResetForm();
};

var ConvertToCelsius = function () {
    $("degrees-top-label").firstChild.nodeValue = "Enter Fahrenheit degrees:";
    $("degrees-bottom-label").firstChild.nodeValue = "Celsius equivalent:";
    ResetForm();
};

window.onload = function () {
    $("to-celsius").onclick = ConvertToCelsius;
    $("to-to-fahrenheit").onclick = ConvertToFahrenheit;
    $("convert").onclick = ConvertTemp;
};

var ConvertTemp = function () {
  var CelsiusTemp, FahrenheitTemp;
  if($("to-celsius").checked === true)
  {
      FahrenheitTemp = parseFloat($("degrees-entered").value);
      if(isNaN(FahrenheitTemp)) {
          alert("Please enter a valid number");
      } else {
          CelsiusTemp = (FahrenheitTemp - 32) * 5/9;
          $("degrees-computed").value = CelsiusTemp.toFixed(0) + String.fromCharCode(176);
      }
  } else if ($("to-fahrenheit").checked === true) {
      CelsiusTemp = parseFloat($("degrees-entered").value);
      if(isNaN(CelsiusTemp)) {
          alert("Please enter a valid number");
      } else {
          FahrenheitTemp = CelsiusTemp * 9/5 + 32;
          $("degrees-computed").value = FahrenheitTemp.toFixed(0) + String.fromCharCode(176);
      }
  }
  $("degrees-entered").focus();
};
