<?php

$str_json = file_get_contents('php://input');
$response = json_decode($str_json, true);

//your_name_data[3].json
$fp = fopen('../json/your_name_data['.$response['priority'].'].json', 'w');
fwrite($fp, $str_json);
fclose($fp);

echo 'your_name_data['.$response['priority'].'].json - IS UPDATED';

?>