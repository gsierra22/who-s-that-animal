
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
--To be polished and updated at the end of the project
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "bio" VARCHAR (1000)
);


CREATE TABLE "pets" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (80) NOT NULL,
	"catdog" VARCHAR (80) NOT NULL,
	"missing" BOOLEAN,
	"description" VARCHAR (1000) NOT NULL,
	"neighborhood" VARCHAR (80) NOT NULL,
	"photo" VARCHAR (80) NULL,
	"missing_message" VARCHAR (500) NOT NULL,
	"user_id" INT REFERENCES "user");

	
	CREATE TABLE "track" (
	"id" SERIAL PRIMARY KEY,
	"pets_id" INT REFERENCES "pets",
	"dates" VARCHAR (1000) NULL,
	"location" VARCHAR (1000) NULL);

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