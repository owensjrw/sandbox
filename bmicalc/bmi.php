<?php
$height = $_POST['height'];
$weight = $_POST['weight'];

$db = new SQLite3('bmi.db');
$db->exec("INSERT INTO bmi (height, weight) VALUES ('$height', '$weight')");
$db->close();
?>
