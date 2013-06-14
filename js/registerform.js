
$(document).ready(function() {
	
	
	// validate register form on keyup and submit
	$("#registerform").validate({
	  rules: {
                    first_name:{
					required:true,
					lettersonly:true
					}, 					
                    last_name:{
					required:true,
					lettersonly:true
					},
					gender:"required",
					phone:{
					  required:true,
					  number:true,
					  minlength:10
					},
                    email: {
                        required: true,
                        email: true
                    },
					qualification:"required",
					address:"required",
					postal_code:
					{
					 required: true,
					 number:true	
					},
					about:"required",
                    txtCaptcha:"required",
                    agree: "required"
                },
                messages: {
                    first_name: {
					required:"Please enter your firstname.",
					lettersonly:"Please enter valid firstname."
					},
                    last_name:{
				      required:"Please enter your lastname.",
					  lettersonly:"Please enter valid lastname."
					  },
					gender:"Please select your gender.",
					phone:{
					   required:"Please enter your phone number.",
					   minlength:"Phone number must be 10 numbers.",
					   number:"Please enter valid phone number"
					},
					email: "Please enter a valid email address.",
					qualification:"Please select your qualification.",
					address:"Please fill out your address.",
					postal_code:
					{
					 required:"Please provide your postal code.",
					 number:"Please enter valid postal code."
					},
					about:"Please mention few words about yourself.",
					txtCaptcha:
					{
					required:"Please enter the captcha.",
					equalTo: "#imgCaptcha"
                    },
                    agree: "Please accept our policy."					
                }
	 });	
	 });

