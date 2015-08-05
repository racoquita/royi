<?php

	require 'vendor/autoload.php';

	$mail = new PHPMailer;

	$mail->isSMTP();
	$mail->Host = 'http://royioyg.com.s208945.gridserver.com/';
	$mail->SMTPAuth = true;
	$mail->Username = 'info@royioyg.com';
	$mail->Password = 'mTr0y10y@stm';
	$mail->SMTPSecure = 'tls';
	$mail->Port = 587;

	print_r($mail);