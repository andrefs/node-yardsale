// Initialize Server
var server = require('diet')    // Require Diet
var app = server() // Create App
var items = require('./items').items;
app.listen(17323)   // Configure Domain

// Require ECT
var ect    = require('diet-ect')({ path: app.path+'/static' })
// Require diet-static
var static = require('diet-static')({ path: app.path+'/static' })

// Load ECT as a global header
app.header(ect)

// Attach static as a global footer
app.footer(static);

// Listen on GET /
// ECT is a global header so you can access it 
// from every route with the `$.html()` method
app.get('/', function($){
   // Set a template variable
   $.data.title = 'Feirão da Casa d\'A Praia';
   $.data.items = items;

   // Now serve the html file 
   // by default: /your_app/static/index.html 
   // use the `root` config to change this
   $.html()
})
