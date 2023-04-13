# README

## Movies frontend

Movies frontend is a web application that is built to list different media data from [TMDB](https://www.themoviedb.org/), allow user to filter data based on media title and genre, also add some medias to favourites and if the user is logged in, user can rate medias.

## Technologies Used

This application uses the following technologies:

- Tailwind CSS: a utility-first CSS framework for building custom designs quickly.

- TypeScript: a strongly typed programming language that compiles to JavaScript.

- Redux: a state management library for managing application state in a predictable way.

- Apollo client: a GraphQL client implementation that allows us to query data from a variety of sources.

## Getting Started

To get started with this application, you will need to have Node.js and npm installed on your machine. Once you have those installed, you can follow the steps below:

- Clone the repository to your local machine.

- Run npm install to install all dependencies.

- Run npm run dev to start local development.

- Run npm run lint to run the ESLinter and check for errors.

## Important notes

- Initially, this web app was deployed to **AWS Amplify** (app [link](https://main.d20srcqdz8uuqy.amplifyapp.com/)) but due to a [bug](https://github.com/aws-amplify/amplify-hosting/issues/3194) related with NextJS images, I have decided to move the deployment to Vercel.

- [TMDB](https://www.themoviedb.org/) API for an unkown reason, when you rate a media and then try to get the rated list of medias for that user it will return the old rated value for the recently rated media.

## Production

[Here](https://movies-front-eight.vercel.app/) is the web app link deployed to Heroku.
