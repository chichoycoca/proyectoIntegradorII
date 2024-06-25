CREATE SCHEMA proyectoint;
use proyectoint;

create table usuarios(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
email VARCHAR(50) NOT NULL,
usuario VARCHAR(50) NOT NULL,
contrasena VARCHAR(100) NOT NULL,
fecha DATE NULL,
dni INT NOT NULL,
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
id_user INT UNSIGNED,
FOREIGN KEY (id_user) REFERENCES usuarios(id)

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
INSERT INTO usuarios(id, email, usuario, contrasena, fecha, dni, fotodeperfil, createdAt,updatedAt,deletedAt)
values (DEFAULT,"simocahn@gmail.com","simon","simon","2020-05-02",46649856,"simon.jpg", NULL,NULL,NULL),
(DEFAULT,"matiasvb@gmail.com","matias","simon","2020-05-02",46649857,"mati.jpg", NULL,NULL,NULL),
(DEFAULT,"bautip@gmail.com","bauti","simon","2020-05-02",46649858,"pele.jpg", NULL,NULL,NULL),
(DEFAULT,"tomyc@gmail.com","tomi","simon","2020-05-02",46649859,"tomas.jpg", NULL,NULL,NULL),
(DEFAULT,"juanf@gmail.com","juan","simon","2020-05-02",46649860,"juan.jpg", NULL,NULL,NULL);
 
 SELECT * FROM productos;
 INSERT INTO productos(id,imagen_producto,producto,descripcion,createdAt,updatedAt,deletedAt,id_user)
 VALUES (DEFAULT, "inter.jpg", "Inter Dragon 2009", "Camiseta Del Inter De Milan 09/10", NULL, NULL, NULL, 1),
 (DEFAULT, "arsenal.jpg", "Arsenal 2005", "Camiseta Del Arsenal 05/06", NULL, NULL, NULL, 2),
 (DEFAULT, "barca.jpg", "Barca 2024", "Camiseta Del Barcelona 23/24", NULL, NULL, NULL, 3),
 (DEFAULT, "real-madrid.jpg", "Real Madrid 2017", "Camiseta Del Real Madrid 17/18", NULL, NULL, NULL, 4),
 (DEFAULT, "man-city.jpg", "Man City 2024", "Camiseta Del Manchester City 23/24", NULL, NULL, NULL, 5),
 (DEFAULT, "man-utd.jpg", "Man Utd 2024", "Camiseta Del Manchester United 23/24", NULL, NULL, NULL, 1),
 (DEFAULT, "roma.jpg", "Roma 2024", "Camiseta De la Roma 23/24", NULL, NULL, NULL, 2),
 (DEFAULT, "casla.jpg", "San Lorenzo 2024", "Camiseta De San Lorenzo De Almagro 24/25", NULL, NULL, NULL, 3),
 (DEFAULT, "bayern.jpg", "Bayer Munich 2010", "Camiseta Del Bayer Munich 10/11", NULL, NULL, NULL, 4),
 (DEFAULT, "milan.jpg", "Milan 2006", "Camiseta Del Milan 06/07", NULL, NULL, NULL, 5);
 
 
SELECT * FROM comentarios;
INSERT INTO comentarios(id, comentario, createdAt, updatedAt, deletedAt, id_post, id_user)
VALUES (DEFAULT, "Muy buena", NULL, NULL, NULL,1,2),
(DEFAULT, "Que cara", NULL, NULL, NULL,1,3),
(DEFAULT, "La quiero!!!", NULL, NULL, NULL,1,4),
(DEFAULT, "Muy buena", NULL, NULL, NULL,2,5),
(DEFAULT, "Que cara", NULL, NULL, NULL,2,3),
(DEFAULT, "La quiero!!!", NULL, NULL, NULL,2,4),
 (DEFAULT, "Muy buena", NULL, NULL, NULL,3,2),
(DEFAULT, "Que cara", NULL, NULL, NULL,3,5),
(DEFAULT, "La quiero!!!", NULL, NULL, NULL,3,4),
(DEFAULT, "Muy buena", NULL, NULL, NULL,4,2),
(DEFAULT, "Que cara", NULL, NULL, NULL,4,3),
(DEFAULT, "La quiero!!!", NULL, NULL, NULL,4,1),
(DEFAULT, "Muy buena", NULL, NULL, NULL,5,2),
(DEFAULT, "Que cara", NULL, NULL, NULL,5,3),
(DEFAULT, "La quiero!!!", NULL, NULL, NULL,5,4),
(DEFAULT, "Muy buena", NULL, NULL, NULL,6,2),
(DEFAULT, "Que cara", NULL, NULL, NULL,6,3),
(DEFAULT, "La quiero!!!", NULL, NULL, NULL,6,4),
(DEFAULT, "Muy buena", NULL, NULL, NULL,7,2),
(DEFAULT, "Que cara", NULL, NULL, NULL,7,3),
(DEFAULT, "La quiero!!!", NULL, NULL, NULL,7,4),
(DEFAULT, "Muy buena", NULL, NULL, NULL,8,2),
(DEFAULT, "Que cara", NULL, NULL, NULL,8,3),
(DEFAULT, "La quiero!!!", NULL, NULL, NULL,8,4),
(DEFAULT, "Muy buena", NULL, NULL, NULL,9,2),
(DEFAULT, "Que cara", NULL, NULL, NULL,9,3),
(DEFAULT, "La quiero!!!", NULL, NULL, NULL,9,4),
(DEFAULT, "Muy buena", NULL, NULL, NULL,10,2),
(DEFAULT, "Que cara", NULL, NULL, NULL,10,3),
(DEFAULT, "La quiero!!!", NULL, NULL, NULL,10,4);
