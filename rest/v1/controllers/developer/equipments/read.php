<?php
$conn = null;
$conn = checkDbConnection();
$equipments = new Equipments($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("equipmentsid", $_GET)) {
    $equipments->$equipments_aid = $_GET['equipmentsid'];
    checkId($equipments->$equipments_aid);
    $query = checkReadById($equipments);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($equipments);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();

