<?php

    function execute($statement) {

        // Execute the statement in the database
        $result = $statement->execute();
        
        // Free up connection to server
        $statement->closeCursor();

        // Return true if successful, else false
        return $result;

    }

    function create_feedback_prepare($db, $name, $rating, $feedback, $submitted) {

        // Create query, use colon syntax to indicate placeholders that must be filled in
        $query = "INSERT INTO `feedback` (`id`, `name`, `rating`, `feedback`, `submitted_on`)
                                VALUES (NULL, :name, :rating, :feedback, :submitted_on)";

        // Prepare the statement for execution
        $statement = $db->prepare($query);

        // Bind values to placeholders
        $statement->bindValue(':name', $name);
        $statement->bindValue(':rating', $rating);
        $statement->bindValue(':feedback', $feedback);
        $statement->bindValue(':submitted_on', $submitted);

        // Return prepared statement
        return $statement;

    }

?>