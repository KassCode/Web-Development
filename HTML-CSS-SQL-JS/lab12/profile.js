"use strict";
$(document).ready(function () {
    $("#save").click(function () {
        $("span").text("");   // clear any previous error messages
        var isValid = true;   // initialize isValid flag
        var datePattern = /^(?:(?:(?:0[13578]|1[02])(\/)31)\1|(?:(?:0[1,3-9]|1[0-2])(\/)(?:29|30)\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:02(\/)29\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:(?:0?[1-9])|(?:1[0-2]))(\/)(?:0[1-9]|1\d|2[0-8])\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
        var email = $("#email-address").val();
        var phone = $("#phone-number").val();
        var zip = $("#zip-code").val();
        var dateOfBirth = $("#date-of-birth").val();

        if (email === "" || !email.match(/^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/)) {
            isValid = false;
            $("#email-address").next().text("Please enter a valid email.");
        }
        if (phone === "" || !phone.match(/^\d{3}-\d{3}-\d{4}$/)) {
            isValid = false;
            $("#phone-number").next().text(
                "Please enter a phone number in NNN-NNN-NNNN format.");
        }
        if (zip === "" || !zip.match(/^\d{5}(-\d{4})?$/)) {
            isValid = false;
            $("#zip-code").next().text("Please enter a valid zip code.");
        }
        if (dateOfBirth === "" || !dateOfBirth.match(datePattern)) {
            isValid = false;
            $("#date-of-birth").next().text("Please enter a valid date in MM/DD/YYYY format.");
        }

        if (isValid) {
            // code that saves profile info goes here
            var profile = []; //initialize empty array

            profile["email-address"] = $("#email-address").val();
            profile["phone-number"] = $("#phone-number").val();
            profile["zip-code"] = $("#zip-code").val();
            profile["date-of-birth"] = $("#date-of-birth").val();

            //initialize session storage item
            sessionStorage.profile = "";

            for(var i in profile) {
                sessionStorage.profile += i + "=" + profile[i] + "|";
            }

            // go to profile page
            location.href = "profile.html";

        }
        $("#email-address").focus();
    });
    // set focus on initial load
    $("#email-address").focus();
});