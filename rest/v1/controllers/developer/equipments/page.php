<?php
// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
// use needed classes
require '../../../models/developer/Equipments.php';
// check database connection

$conn = null;
$conn = checkDbConnection();
// make instance of classes
$equipments = new Equipments($conn);
$response = new Response();
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();


    if (array_key_exists("start", $_GET)) {
        // get data
        $equipments->equipments_start = $_GET['start'];
        $equipments->equipments_total = 15;
        checkLimitId($equipments->equipments_start, $equipments->equipments_total);
        $query = checkReadLimit($equipments);
        $total_result = checkReadAll($equipments);
        http_response_code(200);
        checkReadQuery(
            $query,
            $total_result,
            $equipments->equipments_total,
            $equipments->equipments_start
        );
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}


http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
