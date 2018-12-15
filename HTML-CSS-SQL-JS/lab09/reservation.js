$(document).ready(function() {


$("#reservation_form").submit(function(event) {
		var isValid = true;

		//validate date entry
		// variable and validation requirements for date entries
        var datePattern = /^(?:(?:(?:0[13578]|1[02])(\/)31)\1|(?:(?:0[1,3-9]|1[0-2])(\/)(?:29|30)\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:02(\/)29\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:(?:0?[1-9])|(?:1[0-2]))(\/)(?:0[1-9]|1\d|2[0-8])\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
		var arrival = $("#arrival_date").val().trim(); //trim whitespace
		if(arrival == "")	{ //validate date isn't empty
			$("#arrival_date").next().text("This field is required."); //if empty print error message in span
			isValid = false; //return false validity
		} else if(!datePattern.test($("#arrival_date").val().trim()))	{ //if date doesn't match pattern requirements
			$("#arrival_date").next().text("Must be a valid mm/dd/yyyy date."); //print error message in span
			isValid = false; //return false validity
		} else if(Date.parse($("#arrival_date").val().trim()) < Date.now())	{ //if date is in the past
			$("#arrival_date").next().text("Arrival date must be a future date."); //print error message in span
			isValid = false; //return false validity
		} else	{
			$("#arrival_date").next().text(""); //no error message
		}
		$("#arrival_date").val(arrival);

            //validate email entry
            // variable and validation requirements for email entries
            var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
            var email = $("#email").val().trim(); //trim whitespace
            if(email == "")	{ //if email is empty
                $("#email").next().text("This field is required."); //print error message in span
                isValid = false; //return false validity
            } else if(!emailPattern.test(email))	{ // if email doesn't meet pattern requirements
                $("#email").next().text("Must be a valid email."); // print error message in span
                isValid = false; //return false validity
            } else	{
                $("#email").next().text(""); //no error message
            }
            $("#email").val(email);

            //validate nights entry
            var nights = $("#nights").val().trim(); //trim whitespace
            if(nights == "")	{ //if nights is empty
                $("#nights").next().text("This field is required."); //print error message in span
                isValid = false; //return false validity
            } else if(isNaN(nights))	{ //if entry is not a number
                $("#nights").next().text("This field must be numeric."); //print error message in span
                isValid = false; //return false validity
            } else {
                $("#email").next().text("");
            }
            $("#email").val(nights);

            //validate phone entry
            // variable and validation requirements for phone entries
            var phonePattern = /^(1\s|1)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/;
            var phone = $("#phone").val().trim(); //trim whitespace
            if(phone == "")	{ //if phone is empty
                $("#phone").next().text("This field is required."); //print error message in span
                isValid = false; //return false validity
            } else if(!phonePattern.test(phone))	{ //if entry doesn't match pattern requirements
                $("#phone").next().text("Must be in the format 999-999-9999."); //print error message in span
                isValid = false; //return false validity
            } else	{
                $("#phone").next().text(""); //no error message
            }
            $("#phone").val(phone);
			// prevents form from submitting if any validations fail
        	if(isValid === false) {
            event.preventDefault();
        }

        } //end function
        ); // end submit

}); // end ready