<?php
require_once __DIR__ . '/config.php';
class API{
    function Select(){
        $db = new Connect;
        $users = array();
        $data = $db->prepare('SELECT *FROM users ORDER BY id');
        $data->execute();
        while($OutputData = $data->fetch(PDO::FETCH_ASSOC)){
            $users[$OutputData['id']] = array(
                'id'          => $OutputData['id'],
                'nama'        => $OutputData['nama'],
                'username'    => $OutputData['username'],
                'password'    => $OutputData['password'],
                'email'       => $OutputData['email'],
                'no_telepon'  => $OutputData['no_telepon']
            );
        }
        return json_encode($users);

    }

}
$API = new API;
header('Content-Type: application/json');
echo $API->Select();
?>