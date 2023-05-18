<?php
// Create the SQLite database and table if it doesn't exist
if (!file_exists('./storage/database.sqlite')) {
  try {
    $db = new PDO('sqlite:./storage/database.sqlite');
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $db->exec('CREATE TABLE Model3D (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        description TEXT,
        image_name TEXT,
        x3d_name TEXT,
        sound_name TEXT
    )');

    // Insert some initial data into the table
    $db->exec("INSERT INTO Model3D (title, description, image_name, x3d_name, sound_name) 
      VALUES ('Coca-Cola Can',
       'Coca-Cola Can created using Blender.',
        'coke.png', 'coke_can.x3d', 'coke.mp3')");
    $db->exec("INSERT INTO Model3D (title, description, image_name, x3d_name, sound_name) 
      VALUES ('Sprite Bottle',
      'Sprite Bottle created using Blender.',
       'sprite.png', 'sprite_bottle.x3d', 'sprite.mp3')");
    $db->exec("INSERT INTO Model3D (title, description, image_name, x3d_name, sound_name) 
      VALUES ('Dr Pepper Cup',
      'Dr Pepper Cup created using Blender.',
      'pepper.png', 'pepper.x3d', 'pepper.mp3')");

    echo "Database created and initial data inserted successfully";
  } catch(PDOException $e) {
    echo "Error creating database: " . $e->getMessage();
  }
}
