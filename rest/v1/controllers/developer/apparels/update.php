<?php
$conn = null;
$conn = checkDbConnection();
$apparels = new Apparels($conn);
$error = [];
$returnData = [];
if (array_key_exists("apparelsid", $_GET)) {
    checkPayload($data);

    $apparels->apparels_aid = $_GET['apparelsid'];
    $apparels->apparels_title = checkIndex($data, "apparels_title");
    $apparels->apparels_details = checkIndex($data, "apparels_details");
    $apparels->apparels_price = checkIndex($data, "apparels_price");
    $apparels->apparels_description = checkIndex($data, "apparels_description");
    $apparels->apparels_size = checkIndex($data, "apparels_size");
    $apparels->apparels_photo = checkIndex($data, "apparels_photo");

    $apparels->apparels_datetime = date("Y-m-d H:i:s");
    $apparels_title_old = strtolower($data["apparels_title_old"]);

    // checkId($apparels->apparels_aid);

    comparename($apparels, $apparels_title_old, $apparels->apparels_title);

    $query = checkUpdate($apparels);
    returnSuccess($apparels, "apparels", $query);
}
checkEndpoint();
