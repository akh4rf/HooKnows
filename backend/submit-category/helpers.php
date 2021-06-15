<?php

  function prepare_get_user($db, $username) {
    // Create query, use colon syntax to indicate placeholders that must be filled in
    $query = "SELECT * FROM `users` WHERE `users`.`username` = :username";

    // Prepare the statement for execution
    $statement = $db->prepare($query);

    // Bind values to placeholders
    $statement->bindValue(':username', $username);

    // Return prepared statement
    return $statement;
  }

  function prepare_category($db, $author_id, $name, $rating)
  {
    // Create query, use colon syntax to indicate placeholders that must be filled in
    $query = "INSERT INTO `categories` (`id`, `author_id`, `name`, `rating`)
                                  VALUES (NULL, :author_id, :name, :rating)";

    // Prepare the statement for execution
    $statement = $db->prepare($query);

    // Bind values to placeholders
    $statement->bindValue(':author_id', $author_id);
    $statement->bindValue(':name', $name);
    $statement->bindValue(':rating', $rating);

    // Return prepared statement
    return $statement;
  }

  function prepare_clue($db, $category_id, $clue_text, $answer, $value)
  {
    // Create query, use colon syntax to indicate placeholders that must be filled in
    $query = "INSERT INTO `clues` (`id`, `category_id`, `clue_text`, `answer`, `value`)
                                    VALUES (NULL, :category_id, :clue_text, :answer, :value)";

    // Prepare the statement for execution
    $statement = $db->prepare($query);

    // Bind values to placeholders
    $statement->bindValue(':category_id', $category_id);
    $statement->bindValue(':clue_text', $clue_text);
    $statement->bindValue(':answer', $answer);
    $statement->bindValue(':value', $value);

    // Return prepared statement
    return $statement;
  }

  function execute($statement)
  {

    // Execute the statement in the database
    $result = $statement->execute();

    // Return true if successful, else false
    return $result;
  }

?>
