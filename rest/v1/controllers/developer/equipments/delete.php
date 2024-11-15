<?php
$conn = null;
$conn = checkDbConnection();
$equipments = new Equipments($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("equipmentsid", $_GET)) {
    $equipments->equipments_aid = $_GET['equipmentsid'];
    checkId($equipments->equipments_aid);
    // isAssociated($equipments);
    $query = checkDelete($equipments);
    returnSuccess($equipments, "equipments", $query);
}

checkEndpoint();

