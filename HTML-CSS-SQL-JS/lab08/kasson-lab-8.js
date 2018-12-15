$(document).ready(function(){
    $("#degrees-entered").focus(); //send focus to textbox where user enters degrees to be converted
    //function for when clear is clicked
    $("#clear-entries").click(function() {
        $("#conversion-form").find("input:text").val(''); // clear all textboxes
        $("#degrees-entered").next().text("*"); //reset span to *
        $("#degrees-entered").focus(); //send focus to textbox where user enters degrees to be converted
    });

    $("#degrees-entered").dblclick(function () {
        $("#clear-entries").click(); // equal to using clear button but upon double click
    });

    $("#to-fahrenheit").click(function() {
        $("#degrees-top-label").text("Enter Celsius degrees:"); //set top label to reflect radio button selection
        $("#degrees-bottom-label").text("Fahrenheit equivalent:"); //set bottom label to reflect radio button selection
        $("#clear-entries").trigger("click"); //execute click event of clear button
    });

    $("#to-celsius").click(function() {
        $("#degrees-top-label").text("Enter Fahrenheit degrees:"); //set top label to reflect radio button selection
        $("#degrees-bottom-label").text("Celsius equivalent:"); //set bottom label to reflect radio button selection
        $("#clear-entries").trigger("click"); //execute click event of clear button
    });

$("#convert").click(function () {
    if(isNaN($("#degrees-entered").val())) {
        //display a msg that entry must be numeric is the <span> element that comes after #degrees-entered
        $("#degrees-entered").next().text("Entry must be numeric.");

        //clear value of the #degrees-computed element in case a previous value is present
    } else if($("#degrees-entered").val() === "") {
      //display msg that the field is required in the <span> element that comes after #degrees-entered
        $("#degrees-entered").next().text("This field is required.");

      //clear the value of the #degrees-computed element in case a previous value is present
        $("#degrees-computed").val("");
    }else {
        //declare variables for celsius temperature and fahrenheit temperature
        var cTemp, fTemp;

        var radioButton = $(":checked").val();
        if(radioButton === "convert-to-celsius") {
            //set fahrenheit temperature variable equal to value entered in the #degrees-entered text box
            var fTemp = parseFloat($("#degrees-entered").val());

            // calculate celsius temperature based on conversion formula
            cTemp = (fTemp - 32) * 5/9;
            //display celsius temp in #degrees-computed text box to 2 decimal places using toFixed(2)
            $("#degrees-computed").val(cTemp.toFixed(2));
            $("#convert").click();

        } else if (radioButton === "convert-to-fahrenheit") {
            //set the celsius temperature variable equal to value entered in the #degrees-entered text box
            var cTemp = parseFloat($("#degrees-entered").val());

            //calculate fahrenheit temperature based on conversion formula
            fTemp = cTemp * 9/5 + 32;

            // display the fahrenheit temperature in the #degrees-computed text box to 2 decimal places using toFixed(2)
            $("#degrees-computed").val(fTemp.toFixed(2));
            $("#convert").click();
        }
        //set the text of the <span> element that comes after #degrees-entered to an empty string
        $("#degrees-entered").next().text("");  // to clear out any error message that displayed previously

    }
    //send focus to textbox where user enters degrees to be converted
    $("#degrees-entered").focus();

    //select the text in the top textbox so the user can start typing without deleting existing text
    $("#degrees-entered").select();
});



});
