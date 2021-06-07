<?php

    // Include DB Connection
    include('../db_connect.php');

    // Retrieve incoming data & decode
    $data = json_decode(file_get_contents('php://input'));

    foreach ($data as $key => $value) {
        $data_array[strval($key)] = strval($value);
    }


    include('logout_user.php');

    // Expire the session
    $dt = new DateTime("now", new DateTimeZone('America/New_York'));
    $dt->setTimestamp(time());
    $expire_time = $dt->format('Y-m-d H:i:s');

    // Check if user exists
    $get_user_statement = get_user_prepare($db, $data_array['username']);

    // Execute search
    $get_user_result = execute($get_user_statement);
    
    // If successful, attempt to update session values
    if ($get_user_statement->rowCount() > 0) {
        
        // Update session expire time
        $logout_user_statement = logout_user_prepare($db, $data_array['username'], $expire_time);
        
        // Execute update
        $logout_user_result = execute($logout_user_statement);
        
        // If update successful, send data to frontend
        if ($logout_user_result) {
            
            $user_data = array("username" => $data_array['username']);
            $return = array("Message" => "Successfully Logged Out!", "Data" => $user_data);
            echo json_encode($return);
        }
        // Else, send appropriate error message
        else {
            echo json_encode(array("Message" => "Unable to End Session!"));
        }
    }

    // Else, send appropriate error message
    else {
        echo json_encode(array("Message" => "Error Getting User With This Username!"));
    }
    


?>