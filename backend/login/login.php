<?php

    // Include DB Connection
    include('../db_connect.php');

    // Retrieve incoming data & decode
    $data = json_decode(file_get_contents('php://input'));

    foreach ($data as $key => $value) {
        $data_array[strval($key)] = strval($value);
    }

    include('login_user.php');

    // Create new session ID for user
    $SID = random_int(1000000000, 4294967295);

    // Create session expiration datetime (now + 1 hour)
    $dt = new DateTime("now", new DateTimeZone('America/New_York'));
    $timestamp = time() + 3600;
    $dt->setTimestamp($timestamp);
    $expire_time = $dt->format('Y-m-d H:i:s');

    // Check if user exists
    $get_user_statement = get_user_prepare($db, $data_array['username'],
                                            hash('sha512', $data_array['password']));

    // Execute search
    $get_user_result = execute($get_user_statement);

    // If successful, attempt to update session values
    if ($get_user_statement->rowCount() > 0) {

        // Update session id and expire time
        $login_user_statement = login_user_prepare($db, $data_array['username'], $SID, $expire_time);

        // Execute update
        $login_user_result = execute($login_user_statement);

        // If update successful, send data to frontend
        if ($login_user_result) {
            $user_data = array("SESSION_ID" => $SID, "username" => $data_array['username']);
            $return = array("Message" => "Successfully Logged In!", "Data" => $user_data);
            echo json_encode($return);
        }
        // Else, send appropriate error message
        else {
            echo json_encode(array("Message" => "Unable to Update User!"));
        }
    }

    // Else, send appropriate error message
    else {
        echo json_encode(array("Message" => "Username or Password is Incorrect!"));
    }

?>