//Create React app uses port 3000 for its server
// youtube link that has been helping me out
//: https://www.youtube.com/watch?v=v0t42xBIYIs&t=170s
// note: in order to add React.js to the stack, you need to have a proxy.
// Note: for react.js you end up having 2 servers running concurrently
// for me that is 8000 for the backend and 3000 for the front-end

// By: Skyler Fetter 
// Purpose: Server for running the interactions between the PostgreSQL database and the frontend webapplication

//NOTE: IF using NGROK, I will need to add their URL to my AJAX requests in order to not maintain functionality
//NOTE: On the terms of arrow functions: 
// for something the simple like this,with (), 
// it makes it so that you can just keeps somethings happeing together
// There are some draw backs though. I just dont fully undertand 

//pool is used for multiple possible users
//client is used for singular
//const has lowest memory, let is middle and stays with in local scope, var is the most : https://www.google.com/search?q=let+vs+const+vs+var&oq=let+vs+const&aqs=chrome.1.69i57j0l7.5551j0j7&sourceid=chrome&ie=UTF-8
// also, need to fix table problem: table is already created, maybe there is a way to premake the table? with a view maybe?
// NOTE: On the creating a temp table or a view, what if I can do it then just send it to the server when it starts up?
// That should work fine, I think. 
const express = require('express');
const app = express();
const router = express.Router();
const pg = require('pg')
const bodyParser = require('body-parser')
const geojson = require('geojson')
const {Client, Query} = require('pg')
const url = require('url');
const port = process.env.PORT || 8000
const path = require('path');
const VIEWS = path.join(__dirname, 'views');

// to get body-parse to work also, since i am using Post,i will not need url encoding, i think?
// ---server settings are here
// still learning new things! If i want to upload image to website, i will need to use
// app.use to upload it/
app.set('view engine', 'pug')
app.use(express.static("D:/My_project/my_styles/pix"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const pool = new pg.Pool(
{
	user: "postgres",
	host: "localhost",
	database: "resturant_locations",
	password: "Scionman1995",
    port: '5432',
    connectionLimit :10
}
);

const client = new Client(
{
	user: "postgres",
	host: "localhost",
	database: "resturant_locations",
	password: "Scionman1995",
	port: '5432'
}
);
console.log("listening on port 8000")
//NOTE: need to add a random number gen with table name, in order to keep from having same table, error
// maybe do a pool query that will do all of the query changes?
// so i need to make a temp table, than convert to geoJson will need to use the drop the command
// to fix it.
// NOTE: create a view instead of doing the table join, will help with memory consumption
const merge_query = "CREATE VIEW prj_table AS SELECT prj_rev.average,prj_rest.name,prj_rest.geom,prj_rest.lat,prj_rest.lon,prj_rest.cuisine, prj_rest.id FROM prj_rev LEFT JOIN prj_rest ON prj_rev.id = prj_rest.id"
const geojson_convert = "SELECT row_to_json(fc) FROM ( SELECT 'FeatureCollection' As type, array_to_json(array_agg(f)) As features FROM (SELECT 'Feature' As type, ST_AsGeoJSON(lg.geom)::json As geometry, row_to_json((id,average,name,cuisine)) As properties FROM prj_table lg) As f) As fc";	
const average_reviews = 'UPDATE prj_rev SET average = 0; UPDATE prj_rev SET average = ((one)*1 + (two)*2 + (three)*3 + (four)*4 + (five)*5) / (one + two + three + four + five)'
// so if i understand, you use a pool with a client then this will allow for multiple users to do stuff
// and it does!
//database data converted to geojson ( i wonder if there is a better way to it?)

// learned that you need to return the client to the pool in order to keep it in the pool


// soo it seems like, I just need to this to instantiate the view?? Might have to update it daily or something
// seems to be that there is a lot of interesting ways to do this? 
// I wonder, in my post function if I can just get it to update the view actively? 
// going to edit the merge query to add the review updates to the review table

var foo 

client.connect()
client.query(average_reviews, (err,res) =>{
	
	if(res)
	{
        console.log('averaging done')
        client.query(merge_query, (err,res)=>{
            if(res){
				
                console.log('merge done')
            }
            else{
                console.log(err)
            }
        })
    } 
    else{
        console.log(err)
    }

})
// this is the backend for what I have.
router.get('/api/restaurants', function(req,res,next)
{
	pool.connect()
	.then(client =>{
		
		
		 
		

			console.log('merging data into new table')
			return client
			.query(geojson_convert, (err,result)=> {
			
				if(err)
				{
					console.log(err)
				}
				console.log("converting....")
				restaurants = result.rows[0].row_to_json;
				client.release()
				//console.log(JSON.stringify(foo))
				res.send(restaurants);
				console.log('done')
				
				});
		
					
		

			})
	
})

app.listen(port);
app.use('/', router);