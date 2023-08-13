Simple Todo App Using Angular and Nest JS

* Installation
  * Simply clone the app folders.
  * Install mysql
  * start mysql and create a database called 'todo-app'
  * run npm install.
  * run the todo-app using the command 'npm run start:dev'
  * after successful run nest js will add the tables and will deploy API Listners.
* Setup Front End App
  * locate the root directory of todo-ui-app and run npm install
  * simply run command 'ng-serve' or 'npm-start'
  * Open the browser and go to the localhost:4200 default port for angular applications.
  * Run the Todo app.

* packages in use
  * backend - nestJS
    * typeOrm
    * Class Validator
    * Class transformer
  * Frontend - Angular 16
    * tostr 
    * bootstrap
    * angular material
    * angular animations
* Troubleshooting
  * if you ran in to an Authentication issue where type ORM cannot get connected to the Database try running this command
    to update mysql npm dependency . command: npm un mysql && npm i mysql2