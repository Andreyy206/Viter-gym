<?php
$conn = null;
$conn = checkDbConnection();
$accesories = new Accesories($conn);
$error = [];
$returnData = [];
if (array_key_exists("accesoriesid", $_GET)) {
    checkPayload($data);

    $accesories->accesories_aid = $_GET['accesoriesid'];
    $accesories->accesories_title = checkIndex($data, "accesories_title");
    $accesories->accesories_details = checkIndex($data, "accesories_details");
    $accesories->accesories_price = checkIndex($data, "accesories_price");
    $accesories->accesories_description = checkIndex($data, "accesories_description");
    $accesories->accesories_size = checkIndex($data, "accesories_size");
    $accesories->accesories_photo = checkIndex($data, "accesories_photo");

    $accesories->accesories_datetime = date("Y-m-d H:i:s");
    $accesories_title_old = strtolower($data["accesories_title_old"]);

    // checkId($accesories->accesories_aid);

    comparename($accesories, $accesories_title_old, $accesories->accesories_title);

    $query = checkUpdate($accesories);
    returnSuccess($accesories, "accesories", $query);
}
checkEndpoint();
