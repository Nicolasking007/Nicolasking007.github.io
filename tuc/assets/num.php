<?php
header('Access-Control-Allow-Origin:*');
header('Content-type:application/json; charset=utf-8');
error_reporting(0);
$num = intval(file_get_contents("num.txt"));
exit(json_encode([
    "num"=>$num
]));