use proyectoint;

create table usuarios(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
email VARCHAR(50) NOT NULL,
contraseña VARCHAR(50) NOT NULL,
fecha DATE NULL,
dni INT UNIQUE NOT NULL,
fotodeperfil VARCHAR(50) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP 
);

create table productos(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
imagen_producto VARCHAR(50) NOT NULL,
producto VARCHAR(50) NOT NULL,
descripcion VARCHAR(100) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
cliente_id INT UNSIGNED,
FOREIGN KEY (cliente_id) REFERENCES usuarios(id)
);



create table comentarios(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
comentario VARCHAR(50) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
id_post INT UNSIGNED,
id_user INT UNSIGNED,
FOREIGN KEY (id_post) REFERENCES productos(id),
FOREIGN KEY (id_user) REFERENCES usuarios(id)
);


SELECT * FROM usuarios;
INSERT INTO usuarios(id, email, contraseña, fecha, dni, fotodeperfil, createdAt,updatedAt,deletedAt)
values (DEFAULT,"simocahn@gmail.com","simon","2020-05-02",46649856,"default-image.png", NULL,NULL,NULL);
 
 SELECT * FROM productos;
 INSERT INTO productos(id,imagen_producto,producto,descripcion,createdAt,updatedAt,deletedAt,cliente_id)
 VALUES (DEFAULT, "img-cafetera-moulinex.jpg", "cafetera", "Hace café", NULL, NULL, NULL, 1);
 
 
SELECT * FROM comentarios;
INSERT INTO comentarios(id, comentario, createdAt, updatedAt, deletedAt, id_post, id_user)
VALUES (DEFAULT, "Muy buena", NULL, NULL, NULL,1,1);