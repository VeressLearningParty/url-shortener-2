import express  from "express"
import Shorts from "./dao/dao.js"
import router from "./routes/routes.js"

const app = express()
const port = 3000

app.use(express.json());

app.get('/', (req, res) => {
  Shorts.getAll()
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      res.send(error)
    })
})

app.use('/api', router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

