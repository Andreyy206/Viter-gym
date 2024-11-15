<?php
$conn = null;
$conn = checkDbConnection();

$apparels = new Apparels($conn);

if (array_key_exists("apparelsid", $_GET)) {
    checkEndpoint();
}

checkPayload($data);

$apparels->apparels_title = checkIndex($data, "apparels_title");
$apparels->apparels_details = checkIndex($data, "apparels_details");
$apparels->apparels_price = checkIndex($data, "apparels_price");
$apparels->apparels_description = checkIndex($data, "apparels_description");
$apparels->apparels_size = checkIndex($data, "apparels_size");
$apparels->apparels_photo = checkIndex($data, "apparels_photo");

$apparels->apparels_is_active = 1;
$apparels->apparels_created = date("Y-m-d H:i:s");
$apparels->apparels_datetime = date("Y-m-d H:i:s");


isNameExist($apparels, $apparels->apparels_title);

$query = checkCreate($apparels);
returnSuccess($apparels, "apparels", $query);