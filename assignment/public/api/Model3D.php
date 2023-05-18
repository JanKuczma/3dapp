<?php

class Model3D
{
    private $db;

    function __construct($db)
    {
        $this->db = $db;
    }

    function getById($id)
    {
        $stmt = $this->db->prepare("SELECT * FROM Model3D WHERE id = :id");
        $stmt->bindValue(':id', $id, SQLITE3_INTEGER);
        $result = $stmt->execute();
        $row = $result->fetchArray(SQLITE3_ASSOC);
        return $row;
    }

    function getAll()
    {
        $stmt = $this->db->prepare("SELECT * FROM Model3D");

        $results = array();
        $result = $stmt->execute();
        while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
            $results[] = $row;
        }
        return $results;
    }
}
?>