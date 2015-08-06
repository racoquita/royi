<?php

	require 'vendor/autoload.php';

	if (!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['message']))
	{
		$mail = new PHPMailer;

		$mail->AddAddress("rstovall@me.com", "Richard Stovall");
		$mail->AddAddress("info@royioyg.com");

		$mail->Host    = "localhost";
		$mail->From    = $_POST['email'];
		$mail->Subject = $_POST['name'] . ' has sent Royi a message';
		$mail->Body    = $_POST['message'];

		if(!$mail->Send())
		{
		   echo "<p>Message could not be sent.</p>";
		   echo "<p>Mailer Error: " . $mail->ErrorInfo . "</p>";
		   exit;
		}

		header('Location: /');
	}
	else
	{
		echo "<p>Message could not be sent.</p>";
		echo "<p>Please fill out all form fields</p>";
		exit;
	}

		