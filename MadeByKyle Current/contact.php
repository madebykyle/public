<?PHP
					/*
  					  Contact Form from HTML Form Guide
					*/
					require_once("./include/fgcontactform.php");

					$formproc = new FGContactForm();


					//input email address
					$formproc->AddRecipient('kyle@madebykyle.com'); //<<---Put your email address here
					$formproc->SetFormRandomKey('CnRrspl1FyEylUj');


						if(isset($_POST['submitted']))
							{
   								if($formproc->ProcessForm())
   									{
        								echo '<script language="javascript">';
        								echo 'alert("Thank you for Contacting MadeByKyle, I will reply to you shortly")';
        								echo '</script>';
   									}
							}

				?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en-US" lang="en-US">
<head>
      <meta http-equiv='Content-Type' content='text/html; charset=utf-8'/>
      <title>Contact us</title>
      <link rel="STYLESHEET" type="text/css" href="css/contact.css" />
      <script type='text/javascript' src='scripts/gen_validatorv31.js'></script>
</head>
<body>
				<form id='contactus' action='<?php echo $formproc->GetSelfScript(); ?>' method='post' accept-charset='UTF-8'>
					<fieldset >
						<legend>Contact us</legend>

						<input type='hidden' name='submitted' id='submitted' value='1'/>
						<input type='hidden' name='<?php echo $formproc->GetFormIDInputName(); ?>' value='<?php echo $formproc->GetFormIDInputValue(); ?>'/>
						<input type='text'  class='spmhidip' name='<?php echo $formproc->GetSpamTrapInputName(); ?>' />

						<div class='short_explanation'>* required fields</div>

						<div><span class='error'><?php echo $formproc->GetErrorMessage(); ?></span></div>
						<div class='container'>
						    <label for='name' >Your Full Name*: </label><br/>
						    <input type='text' name='name' id='name' value='<?php echo $formproc->SafeDisplay('name') ?>' maxlength="50" placeholder="Please Enter Your Name" /><br/>
						    <span id='contactus_name_errorloc' class='error'></span>
						</div>
						<div class='container'>
						    <label for='email' >Email Address*:</label><br/>
						    <input type='text' name='email' id='email' value='<?php echo $formproc->SafeDisplay('email') ?>' maxlength="50" placeholder="Please Enter Your Email Address" /><br/>
						    <span id='contactus_email_errorloc' class='error'></span>
						</div>

						<div class='container'>
						    <label for='message' >Message:</label><br/>
						    <span id='contactus_message_errorloc' class='error'></span>
						    <textarea rows="10" cols="50" name='message' id='message' placeholder="How Can MadeByKyle Help You?"><?php echo $formproc->SafeDisplay('message') ?></textarea>
						</div>


						<div class='container'>
						    <input type='submit' name='Submit' value='Submit'>Send Email  </input>
						</div>

					</fieldset>
				</form>
				
				
				<script type='text/javascript'>


				    var frmvalidator  = new Validator("contactus");
				    frmvalidator.EnableOnPageErrorDisplay();
				    frmvalidator.EnableMsgsTogether();
				    frmvalidator.addValidation("name","req","Please provide your name");

				    frmvalidator.addValidation("email","req","Please provide your email address");

				    frmvalidator.addValidation("email","email","Please provide a valid email address");

				    frmvalidator.addValidation("message","maxlen=2048","The message is too long!(more than 2KB!)");



				</script>
</body>
</html>