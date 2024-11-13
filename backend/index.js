import express  from "express"
import Database from "./db/db.js";

const app = express()
const port = 9876

/*app.get('/', (req, res) => {
  res.send('Hello World!')
})*/

/*app.get('/', (req, res) => {
  Database.getAll()
      .then(result => {
        res.send(JSON.stringify(result));
      })
})*/

app.get('/', (req, res) => {
  Database.getAll()
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      res.send(error)
    })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})