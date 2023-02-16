INSERT INTO benevoles (prenom,nom,email) VALUES ('test','benevole','test@benevole');
INSERT INTO jeux (nom,type,zone) VALUES ('loup-garou','ambiance',1);
INSERT INTO zones (nom,jeux) VALUES ('Antigone-Loup-Garous');
INSERT INTO creneaux (debut,fin) VALUES ('8h','9h30');
INSERT INTO relations (idCreneau,idBenevole,idZone) VALUES (1,1,1);
