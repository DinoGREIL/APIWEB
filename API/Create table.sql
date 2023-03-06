
CREATE TABLE benevoles (
  IDbenevole SERIAL PRIMARY KEY,
  prenom VARCHAR(30),
  nombenevole VARCHAR(30),
  email VARCHAR(30),
);
CREATE TABLE jeux (
  IDjeux SERIAL PRIMARY KEY,
  nomjeux VARCHAR(30),
  type VARCHAR(30),
  zone int,
);
CREATE TABLE zones (
  IDzone SERIAL PRIMARY KEY,
  nomzone VARCHAR(30)
);
CREATE TABLE creneaux (
  IDcreneau SERIAL PRIMARY KEY,
  debut VARCHAR(30),
  fin VARCHAR(30)
);

CREATE TABLE relations (
     idCreneau int,
     foreign key (idCreneau) references creneaux(IDcreneau) ON DELETE CASCADE,
      idBenevole int,
      foreign key (idBenevole) references benevoles(IDbenevole) ON DELETE CASCADE, 
      idZone int,
      foreign key (idZone) references zones(IDzone) ON DELETE CASCADE,
      UNIQUE (idCreneau, idBenevole));