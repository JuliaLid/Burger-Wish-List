# Burger Wish List Full-Stack App Using Sequelize Library
![burger](https://user-images.githubusercontent.com/31745567/37233921-dc79832c-23ba-11e8-9a30-a112a3d98d2f.png)

## Project Overview
* Create a full-stack burger logger app using MySQL, Node, Express, Handlebars.
* Use Sequelize library for object-relational mapping instead of vanilla mySQL queries.
* Follow the MVC design pattern.
## Link to Deployed App
* [Burger Wish List](https://sequelize-burger-wish-list.herokuapp.com/)
## Cloning instructions
1. Clone the repo.
2. Run `npm install` to install dependencies in the root app folder on the local machine.
3. Use mySQL Workbench to create a database `seqburgers_db`.
    * Table will be automatically created using a `Sequelize` model when you start the server.
4. Use bash terminal to run command `npm run watch` or `node server.js` to initialize the server and establish connection to the database.
5. Open a browser window and type `localhost:3000` as the URL.
6. Start adding, updating, and deleting burgers. 

![Alt Text](https://media.giphy.com/media/138btjfXAn1xyo/giphy.gif)
## Technology Stack
* HTML5
* CSS3
* Used CSS Grid for layout
* JavaScript 
* jQuery
* Node.js
* npm packages
    * [`express`](https://www.npmjs.com/package/mysql) to handle routing.
    * [`body-parser`](https://www.npmjs.com/package/body-parser): body parsing middleware.
    * [`Express-Handlebars`](https://www.npmjs.com/package/express-handlebars) template to generate HTML page.
    * [`mysq`l](https://www.npmjs.com/package/mysql) for storing burger data.
    * [`Sequelize`](https://www.npmjs.com/package/sequelize) for ORM.
* [Heroku](https://www.heroku.com/) to deploy the app.
* JawsDB Remote Database connected to Heroku app.
## Features
* Used `Sequelize` validation to accomplish the following:
    * A burger's name cannot be null
    * A burger's devoured status is false by default
    * Display burgers in alphabetical order using `Sequelize` `order` parameter. 
