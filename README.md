# Who's that Animal?

Who's that animal is an app that allows users to create an account and input their pets information. Within the app, users can view all pets from all users and 'track' them by typing in the last date and location they saw the animal. A user can also mark their own individual pet as 'missing' which will cause it to appear in a separate missing tab. Users can also delete their pets or stop tracking pets whenever they desire.

This version uses React, Redux, Express, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`).

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Create database and table

Create a new database called `animal_app` and utilize the database.sql page to populate the database

## Development Setup Instructions

- Run `npm install`
- Start postgres if not running already by using `brew services start postgresql`
- Run `npm run server`
- Run `npm run client`
- Navigate to `localhost:3000`

# Built With

Javascript- Main language used to create functionality
CSS- Used in the styling
Bootstrap- Used in the styling
React- Javascript library used to create app and functionality
Redux- Used to store and save information within app
Postgres SQL- Used to create databases
Node.JS-Used to execute Javascript code in the backend
Express- Node module framework used in this app
Axios- Allows front and back end to communicate with one another
Saga- Allow developer to make axios calls within one location

# Authors

Giancarlo Sierra
https://github.com/gsierra22

# Acknowledgement

Thanks to Prime Digital Academy who equipped and helped me to make this application a reality.

# Support

If you have suggestions or issues, please email me at giancarlosierra2011@hotmail.com
