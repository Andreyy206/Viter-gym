<?php
// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
// use needed classes
require '../../../models/developer/Accesories.php';
// check database connection

$conn = null;
$conn = checkDbConnection();
// make instance of classes
$accesories = new Accesories($conn);
$response = new Response();
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();


    if (array_key_exists("start", $_GET)) {
        // get data
        $accesories->accesories_start = $_GET['start'];
        $accesories->accesories_total = 15;
        checkLimitId($accesories->accesories_start, $accesories->accesories_total);
        $query = checkReadLimit($accesories);
        $total_result = checkReadAll($accesories);
        http_response_code(200);
        checkReadQuery(
            $query,
            $total_result,
            $accesories->accesories_total,
            $accesories->accesories_start
        );
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}


http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
