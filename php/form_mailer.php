<?php

	print_r($_POST);

	if (isset($_POST['email']))
	{
		print_r($_POST['email']);
	}
	else
	{
		print_r('nada');
	}