<?php

	if (!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['message']))
	{
		$admin_email = "info@royioyg.com";
		$name 		 = $_POST['name'];
		$email 		 = $_POST['email'];
		$message 	 = $_POST['message'];

		mail($admin_email, "$name", $message, "From:" . $email);

		echo 'Thank you for contacting us!';
	}
	else
	{
		echo 'nada';
	}