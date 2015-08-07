<?php

	require 'vendor/autoload.php';

	if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest')
	{
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
				echo json_encode(array('success' => false, 'message' => 'Message could not be sent'));
				exit;				
			}
			
			echo json_encode(array('success' => true));
		}
		else
		{
			echo json_encode(array('success' => false, 'message' => 'Please fill out all form fields'));
			exit;
		}
	}
	else
	{
		die();
	}	