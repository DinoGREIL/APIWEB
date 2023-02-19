
CREATE TABLE benevoles (
  ID SERIAL PRIMARY KEY,
  prenom VARCHAR(30),
  nom VARCHAR(30),
  email VARCHAR(30),
);
CREATE TABLE jeux (
  ID SERIAL PRIMARY KEY,
  nom VARCHAR(30),
  type VARCHAR(30),
  zone int,
);
CREATE TABLE zones (
  ID SERIAL PRIMARY KEY,
  nom VARCHAR(30)
);
CREATE TABLE creneaux (
  ID SERIAL PRIMARY KEY,
  debut VARCHAR(30),
  fin VARCHAR(30)
);

CREATE TABLE relations (
     idCreneau int,
     foreign key (idCreneau) references creneaux(ID) ON DELETE CASCADE,
      idBenevole int,
      foreign key (idBenevole) references benevoles(ID) ON DELETE CASCADE, 
      idZone int,
      foreign key (idZone) references zones(ID) ON DELETE CASCADE);