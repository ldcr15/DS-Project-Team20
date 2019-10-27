<?php

include 'vendor/autoload.php';

// This block decodes POSTed JSON and adds it to $_POST for easier use
if (($_SERVER['REQUEST_METHOD'] ?? '') == 'POST'
&& stripos($_SERVER['CONTENT_TYPE'], 'application/json') !== false ) {
  $_POST = json_decode(file_get_contents('php://input'), true);
}


//if request method is defined and POST
//and data being sent is JsonSerializable
//then it must be parsed and it'll be turned into key value
