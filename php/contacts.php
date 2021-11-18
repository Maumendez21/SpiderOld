<?php

/*
  |--------------------------------------------------------------------------
  | Mailer module
  |--------------------------------------------------------------------------
  |
  | These module ares used when sending email from contact form
  |
 */


/* SECTION I - CONFIGURATION */

$receiver_mail = 'contacto@spider.com.mx, lino.herrera@spider.com.mx, ricardo.rodriguez@spider.com.mx';
$mail_title    = ( ! empty( $_POST[ 'website spiderFleet' ] )) ? $_POST[ 'NAME' ] . ' from ' . $_POST[ 'website' ] : ' from [WebSite_SpiderFleet]';

/* SECTION II - CODE */

if ( ! empty( $_POST[ 'NAME' ] ) && ! empty( $_POST [ 'EMAIL' ] ) && ! empty( $_POST [ 'TELEFONO' ] ) ) {
	$email   = $_POST[ 'NAME' ] . '<' . $_POST[ 'EMAIL' ] . '>';

	$message = "\r\n\r\n".'Nombre: '.$_POST['NAME'];
	$message .= "\r\n\r\n".'Telefono: '.$_POST['TELEFONO'];

	if(!empty($_POST[ 'contact-website' ]))
		$message .= "\r\n\r\n".'Website: '.$_POST['contact-website'];
	$subject = $mail_title;
	$header .= 'From: '. $email . "\r\n";
	$header .= 'Reply-To: ' . $email;
	if ( mail( $receiver_mail, $subject, $message, $header ) )
		$result = 'El mensaje se envió correctamente';
	else
		$result = 'No se pudo enviar el mensaje';
} else {
	$result  = 'Porfavor, llena todos los campos del formulario';
}
echo $result;