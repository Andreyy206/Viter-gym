<?php
$conn = null;
$conn = checkDbConnection();
$accesories = new Accesories($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("accesoriesid", $_GET)) {
    $accesories->accesories_aid = $_GET['accesoriesid'];
    checkId($accesories->accesories_aid);
    // isAssociated($accesories);
    $query = checkDelete($accesories);
    returnSuccess($accesories, "accesories", $query);
}

checkEndpoint();

