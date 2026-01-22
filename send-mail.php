<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    function clean($data) {
        return htmlspecialchars(trim($data));
    }

    $firstName = clean($_POST['first_name'] ?? '');
    $lastName  = clean($_POST['last_name'] ?? '');
    $email     = clean($_POST['email'] ?? '');
    $phone     = clean($_POST['phone'] ?? '');
    $message   = clean($_POST['message'] ?? '');

    $to = "zubeir.work@gmail.com";
    $subject = "New Quote Request - Website";

    $body = "New Quote Request\n\n";
    $body .= "Name: $firstName $lastName\n";
    $body .= "Email: $email\n";
    $body .= "Phone: $phone\n\n";
    $body .= "Project Details:\n$message";

    $headers  = "From: Website <noreply@yourdomain.com>\r\n";
    $headers .= "Reply-To: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
}
?>
