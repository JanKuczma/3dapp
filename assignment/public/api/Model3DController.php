<?php

class Model3DController
{
  private $model;

  function __construct($model)
  {
    $this->model = $model;
  }

  function getImage($id)
  {
    $row = $this->model->getById($id);
    if (!$row) {
      header('HTTP/1.1 404 Not Found');
      echo 'Model not found';
      return;
    }
    $imagePath = "./storage/images/" . $row['image_name'];
    header('Content-Type: ' . mime_content_type($imagePath));
    header("Access-Control-Allow-Origin: *");
    readfile($imagePath);
  }

  function getMeta($id)
  {
    $row = $this->model->getById($id);
    if (!$row) {
      header('HTTP/1.1 404 Not Found');
      echo 'Model not found';
      return;
    }
    header('Content-Type: application/json');
    header("Access-Control-Allow-Origin: *");
    echo json_encode($row);
  }

  function getMetaAll()
  {
    $data = $this->model->getAll();
    if (!$data) {
      header('HTTP/1.1 404 Not Found');
      echo 'No models found';
      return;
    }
    header('Content-Type: application/json');
    header("Access-Control-Allow-Origin: *");
    echo json_encode($data);
  }
}
?>