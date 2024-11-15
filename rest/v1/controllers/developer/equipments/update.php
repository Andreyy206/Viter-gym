<?php
$conn = null;
$conn = checkDbConnection();
$equipments = new Equipments($conn);
$error = [];
$returnData = [];
if (array_key_exists("equipmentsid", $_GET)) {
    checkPayload($data);

    $equipments->equipments_aid = $_GET['equipmentsid'];
    $equipments->equipments_title = checkIndex($data, "equipments_title");
    $equipments->equipments_details = checkIndex($data, "equipments_details");
    $equipments->equipments_price = checkIndex($data, "equipments_price");
    $equipments->equipments_description = checkIndex($data, "equipments_description");
    $equipments->equipments_size = checkIndex($data, "equipments_size");
    $equipments->equipments_photo = checkIndex($data, "equipments_photo");

    $equipments->equipments_datetime = date("Y-m-d H:i:s");
    $equipments_title_old = strtolower($data["equipments_title_old"]);

    // checkId($equipments->equipments_aid);

    comparename($equipments, $equipments_title_old, $equipments->equipments_title);

    $query = checkUpdate($equipments);
    returnSuccess($equipments, "equipments", $query);
}
checkEndpoint();
