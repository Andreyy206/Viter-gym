<?php
$conn = null;
$conn = checkDbConnection();

$equipments = new Equipments($conn);

if (array_key_exists("equipmentsid", $_GET)) {
    checkEndpoint();
}

checkPayload($data);

$equipments->equipments_title = checkIndex($data, "equipments_title");
$equipments->equipments_details = checkIndex($data, "equipments_details");
$equipments->equipments_price = checkIndex($data, "equipments_price");
$equipments->equipments_description = checkIndex($data, "equipments_description");
$equipments->equipments_size = checkIndex($data, "equipments_size");
$equipments->equipments_photo = checkIndex($data, "equipments_photo");

$equipments->equipments_is_active = 1;
$equipments->equipments_created = date("Y-m-d H:i:s");
$equipments->equipments_datetime = date("Y-m-d H:i:s");


isNameExist($equipments, $equipments->equipments_title);

$query = checkCreate($equipments);
returnSuccess($equipments, "equipments", $query);