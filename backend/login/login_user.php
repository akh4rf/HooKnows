<?php
    function login_user_execute($statement) {

        // Execute the statement in the database
        $result = $statement->execute();
        
        // Free up connection to server
        $statement->closeCursor();

        // Return true if successful, else false
        return $result;

    }

    function login_user_prepare($db, $username, $session_id, $expire_time) {

        // Create query, use colon syntax to indicate placeholders that must be filled in
        $query = "UPDATE `users` SET `session_id` = :session_id, `session_expiration` = :expire_time WHERE `users`.`username` = :username";

        // Prepare the statement for execution
        $statement = $db->prepare($query);

        // Bind values to placeholders
        $statement->bindValue(':username', $username);
        $statement->bindValue(':session_id', $session_id);
        $statement->bindValue(':expire_time', $expire_time);

        // Return prepared statement
        return $statement;

    }

    function get_user_execute($statement) {

        // Execute the statement in the database
        $result = $statement->execute();
        
        // Free up connection to server
        $statement->closeCursor();

        // Return true if successful, else false
        return $result;

    }

    function get_user_prepare($db, $username, $password) {
        // Create query, use colon syntax to indicate placeholders that must be filled in
        $query = "SELECT * FROM `users` WHERE `users`.`username` = :username AND `users`.`password` = :password";

        // Prepare the statement for execution
        $statement = $db->prepare($query);

        // Bind values to placeholders
        $statement->bindValue(':username', $username);
        $statement->bindValue(':password', $password);

        // Return prepared statement
        return $statement;
    }

?>