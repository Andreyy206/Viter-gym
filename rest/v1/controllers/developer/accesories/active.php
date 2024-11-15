<?php
// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
// use needed classes
require '../../../models/developer/Accesories.php';

$conn = null;
$conn = checkDbConnection();
$accesories = new Accesories($conn);
$response = new Response();

$body = file_get_contents("php://input");
$data = json_decode($body, true);

$error = [];
$returnData = [];

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("accesoriesid", $_GET)) {

        checkPayload($data);
        $accesories->accesories_aid = $_GET['accesoriesid'];
        $accesories->accesories_is_active = trim($data["isActive"]);
        $accesories->accesories_datetime = date("Y-m-d H:i:s");

        checkId($accesories->accesories_aid);
        $query = checkActive($accesories);
        http_response_code(200);
        returnSuccess($accesories, "accesories", $query);
    }

    checkEndpoint();
}

http_response_code(200);
checkAccess();
