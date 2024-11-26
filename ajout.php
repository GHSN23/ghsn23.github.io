<?php
mysql_connect("localhost","root","")or die(mysql_error());
mysql_select_db("tunivisions")or die(mysql_error());
$nom=$_POST["nom"];
$pre=$_POST["pre"];
$tel=$_POST["tel"];
$mail=$_POST["mail"];
$raison=$_POST["raison"];
$exp=$_POST["exp"];
$req="select tel from membre ";
$tab=mysql_query($req);
$res=mysql_num_rows($tab);
if ($res!=0){
    echo("membre deja inscrit");
}
else{
    $req1="insert into membre values('$nom','$pre','$tel','$mail','$raison','$exp')";
    $tab=mysql_query($req1);
    echo("membre ajoute avec succes");
}
?>