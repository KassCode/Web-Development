"use strict"; //used at top of file per assignment
$(document).ready(function() { //ready function to contain all javascript/jquery for validation

    //patterns for validating dates
    var datePattern = /^(?:(?:(?:0[13578]|1[02])(\/)31)\1|(?:(?:0[1,3-9]|1[0-2])(\/)(?:29|30)\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:02(\/)29\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:(?:0?[1-9])|(?:1[0-2]))(\/)(?:0[1-9]|1\d|2[0-8])\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    var expDatePattern = /^(0[1-9]|1[0-2])\/20(18|19|20|21|22|23)$/;

    $("#validate").click(function() { //click event function for validate button
       $("span").text(""); //clear text from all span elements
       var isValid = true; //boolean element for validation

        //variables for entries
       var email = $("#email-address").val();
       var phone = $("#phone-number").val();
       var zip = $("#zip-code").val();
       var dob = $("#date-of-birth").val();

       //ensures textbox for email is not empty and contains an email ending in .edu
       if (email === "" || !/^[\w\.\-]+@[\w\.\-]+\.edu$/.test(email)) {
           isValid = false;
           $("#email-address").next().text("Please enter a valid email address that ends in .edu.");
       }

       //ensures textbox for phone number is not empty and conforms to (999)999-9999 format
       if (phone === "" || !/^\d{3}-\d{3}-\d{4}$/.test(phone)) {
           isValid = false;
           $("#phone-number").next().text(
               "Please enter a phone number in (999)999-9999 format.");
       }

       //ensure textbox for zip is not empty and conforms to 99999-9999 format
       if (zip === "" || !/^\d{5}(-\d{4})$/.test(zip)) {
           isValid = false;
           $("#zip-code").next().text("Please enter a valid zip code in 99999-9999 format.");
       }

       //ensure date of birth is not empty and conforms to MM/DD/YYYY format
       if (dob === "" || !datePattern.test(dob)) {
           isValid = false;
           $("#date-of-birth").next().text(
               "Please enter a valid date in MM/DD/YYYY format.");
       }

        var results = $("#results").val();
        // print message after validate button
       if (isValid) {
        //$("#validate").next().text("All fields contain valid entries.");
           results = "All fields contain valid entries.";
           //alert("All fields contain valid entries.");
           //$("#validate").next().text("All fields contain valid entries.");
       }else {
           results = "All fields do not contain valid entries.";
       }

       $("#email-address").focus(); //send focus to first textbox
    });

    $("#email-address").focus();//send focus to first textbox initially
}); // end ready