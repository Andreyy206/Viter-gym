<?php
$conn = null;
$conn = checkDbConnection();

$accesories = new Accesories($conn);

if (array_key_exists("accesoriesid", $_GET)) {
    checkEndpoint();
}

checkPayload($data);

$accesories->accesories_title = checkIndex($data, "accesories_title");
$accesories->accesories_details = checkIndex($data, "accesories_details");
$accesories->accesories_price = checkIndex($data, "accesories_price");
$accesories->accesories_description = checkIndex($data, "accesories_description");
$accesories->accesories_size = checkIndex($data, "accesories_size");
$accesories->accesories_photo = checkIndex($data, "accesories_photo");

$accesories->accesories_is_active = 1;
$accesories->accesories_created = date("Y-m-d H:i:s");
$accesories->accesories_datetime = date("Y-m-d H:i:s");


isNameExist($accesories, $accesories->accesories_title);

$query = checkCreate($accesories);
returnSuccess($accesories, "accesories", $query);