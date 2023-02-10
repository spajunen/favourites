# Favourite beverages application

Add your favourite coffees and teas and display them.

## About the Project

This application is developed as a assignment from Alma, as a part of interview process for Junior Frontend Developer job.

### Problem

This application can be used as a memo for user's favourite coffees and teas.

### Requirements

- Implement a web-page where you can save info about favourite coffees and teas with info:
  - name
  - weight in g
  - price
  - roast 1-5 (multi-choice)

- List saved beverages on same or separate pages
- Save data from Fronend with e.g React or TypeScript
- Implement backend (e.g Java, Kotlin, Golang)
- Text file can be used as a database, also real database is possible but application should be able to run independently
- Tests

- Plan the work so that it takes you max 6 hours. Save app e.g to GitHub and write instructions to run on Readme.md.

### Further developement

- Add database
- Add user accounts & authentication
- Add search, sort & pagination for table
- Add delete and put functions
- Improve error handling
- Solve problem with react-hook-form & MUI/Select
- Add success message when form is send
- Improve design, check accessibility
- Add Next.js to Frontend
- Add language choices and labels to easily maintainable file

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and demo purposes.

### Installing

First, clone the repository to your computer:
```
git clone https://github.com/spajunen/favourites.git
```
Then, run the following commands in the root of each project (```favourites-api``` & ```favourites-ui```):
```
1. npm install
2. npm start
```
Services are now running:
- Frontend: http://localhost:3000/
- Backend: http://localhost:3001/

## Technologies

### Backend
- Node.js
- Express
- Jest

### Frontend
- React.js
- TypeScript
- Axios
- Material UI
- React Hook Form
- React Query
- React router
- Jest

### Other
- No database. Available API calls: 
  - /api/favourites (GET & POST)

