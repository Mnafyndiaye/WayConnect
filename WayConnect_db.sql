DROP DATABASE IF EXISTS wayconnect_db;

CREATE DATABASE wayconnect_db;

use wayconnect_db;

create Table Conducteurs (
    idConducteur INT  PRIMARY KEY, 
    nom VARCHAR(255), 
    prenom VARCHAR(255),
    telephone INT,
    email VARCHAR(200),
);
create Table Passagers (
    idPassager INT  PRIMARY KEY, 
    nom VARCHAR(100), 
    prenom VARCHAR(255),
    telephone INT,
    email VARCHAR(200),
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
    heureDepart TIME,
    dureeCours TIME,
    dateCours DATE,
    etat ENUM('En attente', 'En cour'),
    conducteur_idConducteur FOREIGN KEY REFERENCES Conducteurs(idConducteur)
);

CREATE TABLE Avis (
    idAvis INT AUTO_INCREMENT PRIMARY KEY,
    note tinyint,
    commentaire VARCHAR(4096),
    passager_idPassager FOREIGN KEY REFERENCES Passagers(idPassager),
    course_idCourse FOREIGN KEY REFERENCES Course(idCourse)
);

CREATE TABLE Reservations(
    idReservation INT AUTO_INCREMENT PRIMARY KEY,
    placeDispo INT,
    vehicule_matricule CHAR(7),
    etat ENUM('Accepter', 'Refuser'),
    course_idCourse FOREIGN KEY REFERENCES Course(idCourse),
    passager_idPassager FOREIGN KEY REFERENCES Passagers(idPassager)
);

