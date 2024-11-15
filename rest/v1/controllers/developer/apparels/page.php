<?php
// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
// use needed classes
require '../../../models/developer/Apparels.php';
// check database connection

$conn = null;
$conn = checkDbConnection();
// make instance of classes
$apparels = new Apparels($conn);
$response = new Response();
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();


    if (array_key_exists("start", $_GET)) {
        // get data
        $apparels->apparels_start = $_GET['start'];
        $apparels->apparels_total = 15;
        checkLimitId($apparels->apparels_start, $apparels->apparels_total);
        $query = checkReadLimit($apparels);
        $total_result = checkReadAll($apparels);
        http_response_code(200);
        checkReadQuery(
            $query,
            $total_result,
            $apparels->apparels_total,
            $apparels->apparels_start
        );
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}


http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
