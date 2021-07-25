<?php
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $email_origin = 'CyberVT.org';
    $subject = 'New Email from Sponsor Prospect';
    $body = "Name: $name.\n".
            "Email: $email.\n".
            "Phone: $phone.\n".
            "Message: $message.\n";

    $email_destination = "ncerne00@vt.edu";
    $headers = "From: $email_origin \r\n";
    $headers .= "Reply to: $email \r\n";

    mail($email_destination, $subject, $email_body, $headers);

    header("location: sponsors.html");
?>