import express from "express"
import { rpsls, rps } from "./lib/rpsls.js"

// Create a new Express application instance
const app = express()

// Use the PORT environment variable, or default to 5000 if not set
const port = process.env.PORT || 5000

// Set up middleware to parse request bodies as JSON
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Create a new router instance
const router = express.Router()

// Define routes for Rock, Paper, Scissors and Rock, Paper, Scissors, Lizard, Spock games

// Route for playing Rock, Paper, Scissors game
router.get("/rps", (req, res) => {
  res.status(200).send(JSON.stringify(rps()))
})

// Route for playing Rock, Paper, Scissors, Lizard, Spock game
router.get("/rpsls", (req, res) => {
  res.status(200).send(JSON.stringify(rpsls()))
})

// Route for playing Rock, Paper, Scissors game with a specified move
router.get("/rps/play/:shot", (req, res) => {
  res.status(200).send(JSON.stringify(rps(req.params.shot)))
})

// Route for playing Rock, Paper, Scissors, Lizard, Spock game with a specified move
router.get("/rpsls/play/:shot", (req, res) => {
  res.status(200).send(JSON.stringify(rpsls(req.params.shot)))
})

// Route for playing Rock, Paper, Scissors game via a POST request with a specified move
router.post("/rps/play", (req, res) => {
  res.status(200).send(JSON.stringify(rps(req.body.shot)))
})

// Route for playing Rock, Paper, Scissors, Lizard, Spock game via a POST request with a specified move
router.post("/rpsls/play", (req, res) => {
  res.status(200).send(JSON.stringify(rpsls(req.body.shot)))
})

// Mount the router at the /app route
app.use("/app", router)

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})


