// Import required libraries
import minimist from "minimist"
import express from "express"

// Import functions from rpsls.js module
import { rps, rpsls } from "..lib/rpsls.js";

// Parse command line arguments
const args = minimist(process.argv.slice(2));

// Create Express app and set port number
const app = express();
const port = args["port"] || 5000

// Set up middleware to parse JSON and URL-encoded request bodies
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Define route for root endpoint, returns 200 OK
app.get("/app/", (req, res) => {
    res.status(200).send('200 OK');
})

// Define route for RPS endpoint, returns results of RPS function as JSON
app.get("/app/rps/", (req, res) => {
    res.status(200).send(JSON.stringify(rps()));
})

// Define route for RPSLS endpoint, returns results of RPSLS function as JSON
app.get("/app/rpsls/", (req, res) => {
    res.status(200).send(JSON.stringify(rpsls()));
})

// Define route for playing RPS with query parameter, returns results of RPS function as JSON
app.get("/app/rps/play/", (req, res) => {
    res.status(200).send(JSON.stringify(rps(req.query.shot)));
})

// Define route for playing RPSLS with query parameter, returns results of RPSLS function as JSON
app.get("/app/rpsls/play/", (req, res) => {
    res.status(200).send(JSON.stringify(rpsls(req.query.shot)));
})

// Define route for playing RPS with POST request, returns results of RPS function as JSON
app.post("/app/rps/play/", (req, res) => {
    res.status(200).send(JSON.stringify(rps(req.body.shot)));
})

// Define route for playing RPSLS with POST request, returns results of RPSLS function as JSON
app.post("/app/rpsls/play/", (req, res) => {
    res.status(200).send(JSON.stringify(rpsls(req.body.shot)));
})

// Define route for playing RPS with URL parameter, returns results of RPS function as JSON
app.get("/app/rps/play/:shot", (req, res) => {
    res.status(200).send(JSON.stringify(rps(req.params.shot)));
})

// Define route for playing RPSLS with URL parameter, returns results of RPSLS function as JSON
app.get("/app/rpsls/play/:shot", (req, res) => {
    res.status(200).send(JSON.stringify(rpsls(req.params.shot)));
})

// Define route for all other requests, returns 404 NOT FOUND
app.get("*", (req, res) => {
    res.status(404).send("404 NOT FOUND");
})

// Start server and listen on specified port
app.listen(port, () =>{
    console.log('Server listening on port ' + port);
})



