import express from "express"
import { rpsls, rps } from "./lib/rpsls.js"

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const router = express.Router()

router.get("/rps", (req, res) => {
  res.status(200).send(JSON.stringify(rps()))
})

router.get("/rpsls", (req, res) => {
  res.status(200).send(JSON.stringify(rpsls()))
})

router.get("/rps/play/:shot", (req, res) => {
  res.status(200).send(JSON.stringify(rps(req.params.shot)))
})

router.get("/rpsls/play/:shot", (req, res) => {
  res.status(200).send(JSON.stringify(rpsls(req.params.shot)))
})

router.post("/rps/play", (req, res) => {
  res.status(200).send(JSON.stringify(rps(req.body.shot)))
})

router.post("/rpsls/play", (req, res) => {
  res.status(200).send(JSON.stringify(rpsls(req.body.shot)))
})

app.use("/app", router)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
