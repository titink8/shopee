
<?php
$baca = explode("\n", file_get_contents('https://cdn.jsdelivr.net/gh/titink8/shopee@main/anulist.txt'));
$anu = rand(0,count($baca)-1);


$udahkebaca = $baca[$anu];
/*print_r($udahkebaca);*/

?>

<!DOCTYPE html>
<html>
<meta http-equiv="refresh" content="0; url=<?php echo $udahkebaca; ?>">

</html>
