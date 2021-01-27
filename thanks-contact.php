<?php		
$to = "aniket.saxena16@gmail.com";
$subject = "Invitation Details";

if(isset($_POST['inputEmail']))
{
 		$str.='<table width="93%" border="0" cellspacing="2" cellpadding="5" align="center">
		  <tr>
			<td colspan="2" align="center" bgcolor="#e7e7e7" height="30"><font face="Verdana, Arial, Helvetica, sans-serif" size="2"><strong>'.$subject.'</strong></font></td>
		  </tr>
		  
		  <tr>
			<td width="50%" bgcolor="#e9e9e9"><strong><font size="2" face="Verdana, Arial, Helvetica, sans-serif">Name</font></strong></td>
			<td valign="top" bgcolor="#e9e9e9"><font size="2" face="Verdana, Arial, Helvetica, sans-serif">'.$_POST['inputName'].'</font></td>
		  </tr>

		  <tr>
			<td width="50%" bgcolor="#e9e9e9"><strong><font size="2" face="Verdana, Arial, Helvetica, sans-serif"> Email</font></strong></td>
			<td valign="top" bgcolor="#e9e9e9"><font size="2" face="Verdana, Arial, Helvetica, sans-serif">'.$_POST['inputEmail'].'</font></td>
		  </tr>
		  
		  <tr>
			<td width="50%" bgcolor="#e9e9e9"><strong><font size="2" face="Verdana, Arial, Helvetica, sans-serif"> No of Guests </font></strong></td>
			<td valign="top" bgcolor="#e9e9e9"><font size="2" face="Verdana, Arial, Helvetica, sans-serif">'.$_POST['selectGuests'].'</font></td>
		  </tr>		  
		  
		  <tr>
			<td bgcolor="#e9e9e9"><strong><font size="2" face="Verdana, Arial, Helvetica, sans-serif">Attending</font></strong></td>
			<td valign="top" bgcolor="#e9e9e9"><font size="2" face="Verdana, Arial, Helvetica, sans-serif">'.$_POST['selectAttending'].'</font></td>
		  </tr>
</table>'; 
	$body.="<html><head><title>Contact Us</title><meta http-equiv='Content-Type' content='text/html; charset=iso-8859-1'></head>
<body leftmargin='0' topmargin='0' marginwidth='0' marginheight='0'>
<br>";
	$body.="$str"."<br>";
	$body.="</body></html>";  
	$headers .= "From: ".$_POST['inputEmail'] ."\nContent-Type: text/html; charset=iso-8859-1";
	
	mail($to, $subject, $body, $headers);
	echo "done";
	die;
}
?>