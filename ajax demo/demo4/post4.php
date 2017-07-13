<!-- 同get3.php -->
<?php 
	header("Content-Type:text/html; charset=utf-8");
	echo "{ \"usrname\" : \"{$_REQUEST['usrname']}\" , \"content\" : \"{$_REQUEST['content']}\"}" 
?>
