<?php

    $whitelist = array(
        '127.0.0.1',
        '::1'
    );
    // Check for localhost
    if(in_array($_SERVER['REMOTE_ADDR'], $whitelist)){
        $username = 'akh4rf';
        $password = 'tSSMZjB0UtCmy79C';
        $host = 'localhost:3306';
        $dbname = 'hoo_knows';
        // Allow requests from development and production domains
        header('Access-Control-Allow-Origin: http://localhost:4200');
    }
    // Else, production
    else {
        // Allow requests from development and production domains
        header('Access-Control-Allow-Origin: http://hoo-knows.uk.r.appspot.com');
    }

    // Create DSN for PDO connection
    $dsn = "mysql:host=$host;dbname=$dbname";

    // Connect to the database
    try 
    {
        $db = new PDO($dsn, $username, $password);   
        // echo "<p>You are connected to the database</p>";
    }
    // Handle PDO exceptions (errors thrown by the PDO library)
    catch (PDOException $e)
    {
        // Call a method from any object, 
        // use the object's name followed by -> and then method's name
        // All exception objects provide a getMessage() method that returns the error message 
        // $error_message = $e->getMessage();        
        // echo "<p>An error occurred while connecting to the database: $error_message </p>";
    }
    // Handle any other exception
    catch (Exception $e)
    {
        // $error_message = $e->getMessage();
        // echo "<p>Error message: $error_message </p>";
    }

    header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
    header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding');
    header('Access-Control-Max-Age: 1000');

?>