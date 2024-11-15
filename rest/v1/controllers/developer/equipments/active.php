<?php
// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
// use needed classes
require '../../../models/developer/Apparels.php';

$conn = null;
$conn = checkDbConnection();
$apparels = new Apparels($conn);
$response = new Response();

$body = file_get_contents("php://input");
$data = json_decode($body, true);

$error = [];
$returnData = [];

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("apparelsid", $_GET)) {

        checkPayload($data);
        $apparels->apparels_aid = $_GET['apparelsid'];
        $apparels->apparels_is_active = trim($data["isActive"]);
        $apparels->apparels_datetime = date("Y-m-d H:i:s");

        checkId($apparels->apparels_aid);
        $query = checkActive($apparels);
        http_response_code(200);
        returnSuccess($apparels, "apparels", $query);
    }

    checkEndpoint();
}

http_response_code(200);
checkAccess();
