<?php
    // Include DB Connection
    include('../db_connect.php');

    // Retrieve incoming data
    $name = $_GET['name'];
    $rating = $_GET['rating'];
    $feedback = $_GET['feedback'];

    include('helpers.php');

    $dt = new DateTime("now", new DateTimeZone('America/New_York'));
    $posted_on = $dt->format('Y-m-d H:i:s');

    $feedback_post_statement = create_feedback_prepare($db, $name, $rating, $feedback, $posted_on);

    $feedback_post_result = execute($feedback_post_statement);
    
    if ($feedback_post_result) {
        header("Location: http://localhost:4200");
    }
?>