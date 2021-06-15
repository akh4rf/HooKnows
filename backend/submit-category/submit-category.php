<?php

// Include DB Connection
include('../db_connect.php');

// Retrieve incoming data & decode
$data = json_decode(file_get_contents('php://input'));

foreach ($data as $key => $value) {
  if ($key == "clues") {
    // $value[0] represents first clue
    for ($i = 0; $i < 5; $i++) {
      $temp_arr = array();
      foreach ($value[$i] as $k => $v) {
        $temp_arr[$k] = $v;
      }
      $data_array["clues"][$i] = $temp_arr;
    }
  } else {
    $data_array[strval($key)] = strval($value);
  }
}

include('helpers.php');

// Get User ID
$get_user_statement = prepare_get_user($db, $data_array['author']);
$get_user_result = execute($get_user_statement);
// If successful, fetch their ID and attempt to insert category tied to them
if ($get_user_result) {
  $author_id = $get_user_statement->fetch(0)[0];
  $get_user_statement->closeCursor();

  // Insert Category
  $insert_category_statement = prepare_category($db, $author_id, $data_array['name'], 0);
  $insert_category_result = execute($insert_category_statement);

  // If successful, fetch the new category's ID and proceed to insert clues
  if ($insert_category_result) {
    // Get Category ID
    $category_id = $db->lastInsertId();
    $insert_category_statement->closeCursor();

    // Insert Clues
    foreach ($data_array["clues"] as $clue) {
      $insert_clue_statement = prepare_clue($db, $category_id, $clue['text'], $clue['answer'], intval($clue['value']));
      $insert_clue_result = execute($insert_clue_statement);
      // Throw error if any insert is unsuccessful
      if (!$insert_clue_result) {
        echo json_encode(array("Message" => "Error inserting one or more clues!"));
      }
      // Else, proceed to next clue
      $insert_clue_statement->closeCursor();
    }
    // If no errors thrown, category & clues were successfully created
    echo json_encode(array("Message" => "Success!"));
  }
  // Else, send appropriate error message
  else {
    echo json_encode(array("Message" => "Error inserting category!"));
  }

}
// Else, send appropriate error message
else {
  echo json_encode(array("Message" => "Error authenticating author!"));
}


?>
