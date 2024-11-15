<?php
$conn = null;
$conn = checkDbConnection();
$apparels = new Apparels($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("apparelsid", $_GET)) {
    $apparels->apparels_aid = $_GET['apparelsid'];
    checkId($apparels->apparels_aid);
    // isAssociated($apparels);
    $query = checkDelete($apparels);
    returnSuccess($apparels, "apparels", $query);
}

checkEndpoint();

