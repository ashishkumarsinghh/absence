## Crewmeister Absence manager

Simple absence manager, with backend written in nestJS and frontend with react.
The backend is initialized with Nest CLI and frontend is initialized with CRA.

## How to run?

1. Clone the repo.
2. cd in the directory
3. yarn start

## Ingredients

- NestJS for backend.
- React for frontend.
- Bootstrap for design.

## Summary

The client code is present in the client/ directory and server code is present in apiserver/ directory. client runs on localhost:3000 port and server runs on localhost:3001.

Client makes request to server via the endpoints exposed by the server and shows up the data. Here are all the endpoints exposed by server:

1. /absences, GET - Get all the absences
2. /absences/range GET - Get all the absences in specified date range
3. /absences/ltype GET - Get all the absences by type vacation or sickness
4. /absences/uid/:name GET- Get all the absences by name of user
5. /absences/export GET - Get ical file for export to outlook.
