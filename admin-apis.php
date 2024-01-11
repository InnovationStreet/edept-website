<?php
// Enable CORS (Cross-Origin Resource Sharing)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");
header('Content-Type: application/json');

$servername = "127.0.0.1:3306";
$username = "u190737783_admin";
$password = "Vihaan@141212";
$dbname = "u190737783_admin";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
function DoPost($conn)
{
    $_POST = json_decode(file_get_contents("php://input"), true);
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $city = htmlspecialchars($_POST["city"]);
    $phone = htmlspecialchars($_POST["phone"]);
    $dob = htmlspecialchars($_POST["dob"]);
    $program = htmlspecialchars($_POST["program"]);
    $affiliate = htmlspecialchars($_POST["affiliate"]);
    $sql = "INSERT INTO leads (lead_name, email,city, phone,dob,program,affiliate)
     VALUES ('$name', '$email','$city','$phone','$dob','$program','$affiliate')";
    $response = array();
    if ($conn->query($sql) === TRUE) {
        $response[0] = array(
            'message' => 'New record created successfully"',
            'success' => true
        );
    } else {
        $response[0] = array(
            'message' => "Error: " . $sql . "<br>" . $conn->error,
            'success' => false
        );
    }
    echo json_encode($response[0]);
    $conn->close();
}


function DoGet($conn)
{

    $sql = "SELECT id, lead_name, email,city, phone,dob,program,affiliate FROM leads";
    $result = $conn->query($sql);
    $rows = $result->fetch_all(MYSQLI_ASSOC);
    $results = [];
    foreach ($rows as $row) {
        array_push($results, (object) [
            'name' => $row["lead_name"],
            'email' => $row["email"],
            'city' => $row["city"],
            'phone' => $row["phone"],
            'dob' => $row["dob"],
            'program' => $row["program"],
            'affiliate' => $row["affiliate"]
        ]);
    }
    $response = array();
    $response[0] = array(
        'data' => $results,
        'success' => true
    );
    echo json_encode($response[0]);
    $conn->close();
}

function Main($conn)
{

    switch ($_SERVER['REQUEST_METHOD']) {
        case 'GET':
            return DoGet($conn);
        case 'POST':
            return DoPost($conn);
    }
}

Main($conn);
?>