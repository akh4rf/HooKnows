<?php
    function execute($statement) {

        // Execute the statement in the database
        $result = $statement->execute();
        
        // Free up connection to server
        $statement->closeCursor();

        // Return true if successful, else false
        return $result;

    }

    function create_user_prepare($db, $session_id, $expire_time, $username, $password, $firstName, $lastName) {

        // Create query, use colon syntax to indicate placeholders that must be filled in
        $query = "INSERT INTO `users` (`id`, `session_id`, `session_expiration`, `username`, `password`, `first_name`, `last_name`)
                                VALUES (NULL, :session_id, :expire_time, :username, :password, :firstName, :lastName)";

        // Prepare the statement for execution
        $statement = $db->prepare($query);

        // Bind values to placeholders
        $statement->bindValue(':session_id', $session_id);
        $statement->bindValue(':expire_time', $expire_time);
        $statement->bindValue(':username', $username);
        $statement->bindValue(':password', $password);
        $statement->bindValue(':firstName', $firstName);
        $statement->bindValue(':lastName', $lastName);

        // Return prepared statement
        return $statement;

    }
?>