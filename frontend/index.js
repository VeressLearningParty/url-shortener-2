import express  from 'express'
import Templater from './templates/templater.js'
import BackendService from './services/backendService.js'


const app = express()
const port = 3000

app.use("/public", express.static('public'));
app.use(express.json());

app.get('/', async (req, res) => {
  Templater.renderTemplate("main", {}, {})
    .then(str => {
      res.send(str);
    })
    .catch(err => {
      res.send(err)
    })
});

app.post("/short", (req, res) => {
  BackendService.short(req.body.url)
  .then(result => res.send(result))
  .catch(error => res.send(error))
})

app.get("/:short([a-zA-Z0-9]{8})", (req, res) => {
  console.log(req.params.short)
  BackendService.get(req.params.short)
    .then(result => res.redirect(result))
    .catch(e => res.send(e))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})