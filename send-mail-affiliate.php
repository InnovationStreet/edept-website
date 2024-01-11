<?php
// Enable CORS (Cross-Origin Resource Sharing)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $_POST = json_decode(file_get_contents("php://input"), true);
    // Get and sanitize data from the POST method
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $city = htmlspecialchars($_POST["city"]);
    $phone = htmlspecialchars($_POST["phone"]);
    $dob = htmlspecialchars($_POST["dob"]);
    $program = htmlspecialchars($_POST["program"]);
    // // Validate email
    // if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    //     die("Invalid email format");
    // }

    // Email details
    $to = "marketing@edept.co";
    // $to = "dhruvsoni7220@gmail.com";
    $subject = "New Affiliate Lead Generate for Chandigarh University";

    // Email content (custom template)
    $message = "
        <html>
        <head>
            <title>New Lead</title>
        </head>
        <body>
            <h2>Hello TeamEdept!</h2>
            <p>New lead generated with following information:</p>
            <ul>
                <li>Name: $name</li>
                <li>Email: $email</li>
                <li>Phone: $phone</li>
                <li>Date of Birth: $dob</li>
                <li>City: $city</li>
                <li>Program: $program</li>
            </ul>
        </body>
        </html>
    ";

    // Headers for HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: $to" . "\r\n";

    // Additional headers to help prevent email header injections
    $headers .= "Reply-To: $to" . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Send email
    mail($to, $subject, $message, $headers);

    echo "Email sent successfully!";
} else {
    // Handle the case when the script is accessed directly without POST data
    echo "Please submit the form with name, email, phone, dob, and program.";
}

?>