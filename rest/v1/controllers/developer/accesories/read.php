<?php
$conn = null;
$conn = checkDbConnection();
$accesories = new Accesories($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("accesoriesid", $_GET)) {
    $accesories->$accesories_aid = $_GET['accesoriesid'];
    checkId($accesories->$accesories_aid);
    $query = checkReadById($accesories);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($accesories);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();

