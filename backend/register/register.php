<?php

    // Include DB Connection
    include('../db_connect.php');

    // Retrieve incoming data & decode
    $data = json_decode(file_get_contents('php://input'));

    foreach ($data as $key => $value) {
        $data_array[strval($key)] = strval($value);
    }

    include('create_user.php');

    // Create new session ID for user
    $SID = random_int(1000000000, 4294967295);

    // Create session expiration datetime (now + 1 hour)
    $dt = new DateTime("now", new DateTimeZone('America/New_York'));
    $timestamp = time() + 3600;
    $dt->setTimestamp($timestamp);
    $expire_time = $dt->format('Y-m-d H:i:s');

    // Create PDO statement to execute
    $statement = create_user_prepare($db, $SID, $expire_time,
                                            $data_array['username'],
                                            hash('sha512', $data_array['password']),
                                            $data_array['firstName'],
                                            $data_array['lastName']);
    // Execute statement
    $result = execute($statement);

    // If successful, send data to frontend
    if ($result) {
        $user_data = array("SESSION_ID" => $SID, "username" => $data_array['username'], "expiration" => $dt->getTimestamp());
        $return = array("Message" => "Successfully Registered!", "Data" => $user_data);
        echo json_encode($return);
    }

    // Else, send appropriate error message
    else {
        switch ($statement->errorInfo()[1]) {
            // Error code for duplicate entry
            case 1062:
                echo json_encode(array("Message" => "Username already exists!"));
                break;
        }
    }

?>