<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $firstName = htmlspecialchars($_POST['first_name']);
    $lastName  = htmlspecialchars($_POST['last_name']);
    $email     = htmlspecialchars($_POST['email']);
    $phone     = htmlspecialchars($_POST['phone']);
    $message   = htmlspecialchars($_POST['message']);

    $to = "yourmail@example.com"; // YOUR email
    $subject = "New Quote Request";
    
    $body = "
    New Quote Request:

    Name: $firstName $lastName
    Email: $email
    Phone: $phone

    Project Details:
    $message
    ";

    $headers = "From: Website <noreply@yourdomain.com>";

    if (mail($to, $subject, $body, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
}
?>
