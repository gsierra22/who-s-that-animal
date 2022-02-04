
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
--To be polished and updated at the end of the project

--First create Database 
CREATE DATABASE "animal_app";


--Next create tables
CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    username character varying(80) NOT NULL UNIQUE,
    password character varying(1000) NOT NULL,
    bio character varying(1000)
);


CREATE TABLE pets (
    id SERIAL PRIMARY KEY,
    catdog character varying(80),
    description character varying(1000) NOT NULL,
    neighborhood character varying(80) NOT NULL,
    photo character varying,
    user_id integer REFERENCES "user"(id),
    missing boolean,
    name character varying,
    missing_message character varying(500)
);


	
	CREATE TABLE track (
    id SERIAL PRIMARY KEY,
    pets_id integer REFERENCES pets(id) ON DELETE CASCADE,
    dates character varying(1000),
    location character varying(1000),
    user_id integer REFERENCES "user"(id)
);


INSERT INTO "user"  ("username", "password", "bio")
VALUES ('Bob', 'asdf', 'Xolotl'),
('Emily', 'fdsa', 'Freya');


INSERT INTO "pets" ("name", "catdog", "missing", "description", "neighborhood", "photo", "missing_message", "user_id")
VALUES ('Bob','Dog', 'True', 'Grey Husky', 'Seward','Photo_Url','Here is my contact information' , '1'),
('Bastet', 'Cat', 'False', 'Orange Tabby', 'Seward', 'Photo_Url','Please call me at 555-555-5555' ,'2');
 

 INSERT INTO "track" ("pets_id", "dates", "location", "user_id")
VALUES('1', '10/22', 'Arkansas', '1'),
('2', '12/29', 'Minneapolis', '2'),
('1', '5/26', 'Netherlands', '2');;