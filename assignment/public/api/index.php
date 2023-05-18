<?php
require_once 'bootstrap.php';
require_once 'Model3D.php';
require_once 'Model3DController.php';
require_once 'AltoRouter.php';
$db = new SQLite3('storage/database.sqlite');
$model = new Model3D($db);
$controller = new Model3DController($model);

$router = new AltoRouter();

$router->setBasePath($_SERVER["SCRIPT_NAME"]);

$router->map('GET', '/model3d/image/[i:id]', function ($id) use ($controller) {
    $controller->getImage($id);
});

$router->map('GET', '/model3d/meta/[i:id]', function ($id) use ($controller) {
    $controller->getMeta($id);
});

$router->map('GET', '/model3d/meta/all', function () use ($controller) {
    $controller->getMetaAll();
});

$match = $router->match();
if ($match && is_callable($match['target'])) {
    call_user_func_array($match['target'], $match['params']);
} else {
    header($_SERVER["SERVER_PROTOCOL"] . " 404 Not Found");
    echo "404 Not Found";
    echo "<br>";
    echo "DIR: ".__DIR__;
    echo "<br>";
    echo "DOC: ".$_SERVER["DOCUMENT_ROOT"];
    echo "<br>";
    echo "hh: ".$_SERVER["HTTP_HOST"];
    echo "<br>";
    echo "ru: ".$_SERVER["REQUEST_URI"];
    echo "<br>";
    echo "sn: ".$_SERVER["SCRIPT_FILENAME"];
    echo "<br>";
    echo "dir: ".dirname($_SERVER["SCRIPT_FILENAME"]);
    echo "<br>";
    echo "pathinfo: ".$_SERVER["PATH_INFO"];
    echo "<br>";
    echo "slef: ".$_SERVER["PHP_SELF"];
    echo "<br>";
    echo "script: ".$_SERVER["SCRIPT_NAME"];
    echo "<br>";
    echo "pwd: ".$_SERVER["PATH_TRANSLATED"];
    echo "<br>";
    echo "home: ".$_SERVER["HOME"];
    echo "<br>";
    echo "base cwd: ".basename(getcwd());
    echo "<br>";
    echo "cwd: ".getcwd();
    echo "<br>";
    echo "dir script: ".dirname($_SERVER["SCRIPT_NAME"]);
}
?>