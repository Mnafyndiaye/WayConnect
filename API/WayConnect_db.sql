DROP DATABASE IF EXISTS wayconnect_db;

CREATE DATABASE wayconnect_db;

use wayconnect_db;

create Table Utilisateurs (
    idUser INT AUTO_INCREMENT PRIMARY KEY, 
    nom VARCHAR(255) NOT NULL, 
    prenom VARCHAR(255) NOT NULL,
    telephone INT NOT NULL UNIQUE,
    email VARCHAR(200) NOT NULL UNIQUE,
    Mdp VARCHAR(500) NOT NULL,
    userType ENUM('conducteur', 'passager') NOT NULL
);

CREATE Table Vehicules(
    matricule CHAR(7) NOT NULL UNIQUE,
    marque VARCHAR(100),
    modele VARCHAR(100),
    couleur VARCHAR(30),
    nbrPlace INT
);

CREATE TABLE Course (
    idCourse INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(250),
    description VARCHAR(250),
    depart VARCHAR(250),
    destination VARCHAR(250),
    heureDepart DATE,
    siegeDisponible INT,
    prix FLOAT, 
    etat ENUM('En attente', 'En cour', 'Terminée'),
    idConducteur INT, 
    FOREIGN KEY (idConducteur) REFERENCES Utilisateurs(idUser)
);

CREATE TABLE Avis (
    idAvis INT AUTO_INCREMENT PRIMARY KEY,
    note TINYINT,
    commentaire VARCHAR(4096),
    passager_idPassager INT,
    course_idCourse INT,
    FOREIGN KEY (passager_idPassager) REFERENCES Utilisateurs(idUser),
    FOREIGN KEY (course_idCourse) REFERENCES Course(idCourse)
);
CREATE TABLE Reservations(
    idReservation INT AUTO_INCREMENT PRIMARY KEY,
    placeDispo INT,
    etat ENUM('Accepté', 'Refusé'),
    course_idcourse INT,
    FOREIGN KEY (course_idcourse) REFERENCES Course(idCourse),
    passager_idPassager INT, 
    FOREIGN KEY (passager_idPassager) REFERENCES Utilisateurs(idUser)
);

