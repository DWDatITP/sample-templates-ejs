# Sample Templating

This sample app demonstrates the use of [ejs templates](http://www.embeddedjs.com/).

## Installation

  * `git clone https://github.com/DWDatITP/sample-templates-ejs.git`
  * `cd sample-templates-ejs`
  * `npm install`
  * `nodemon server.js`
  * open [http://localhost:5000](http://localhost:5000)

## Adding EJS to your existing app

  * This will download the ejs module and update your package.json to list it (important for when you deploy to Heroku):
  * `npm install --save ejs`
  * Then, update your server.js file to set the app's view engine to ejs:
  * `app.set('view engine', 'ejs');` # Here it is [in the server.js code](https://github.com/DWDatITP/sample-templates-ejs/blob/2c5bf6ea5f0c9f403f59d7a14f53d5a358bc5e17/server.js#L5).
  * Next, create a folder called "views"
  * Now, in your app's handler you can call `res.render('viewName')`. The app will look up a file called 'viewName.ejs' in your views folder and render it.
