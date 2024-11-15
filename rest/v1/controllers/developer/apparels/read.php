<?php
$conn = null;
$conn = checkDbConnection();
$apparels = new Apparels($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("apparelsid", $_GET)) {
    $apparels->$apparels_aid = $_GET['apparelsid'];
    checkId($apparels->$apparels_aid);
    $query = checkReadById($apparels);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($apparels);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();

