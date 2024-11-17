import express from "express";
import Shorts from "../dao/dao.js";

const router = express.Router();

router.get('/api/short', (req, res) => {
    Shorts.getAll()
        .then((result) => {
            res.send(result)
        })
        .catch((error) => {
            res.send(error)
        })
});

router.post('/api/short', (req, res) =>{
    let NewUrl = new Shorts();
    NewUrl.fullurl = req.body.fullurl;
    NewUrl.insert()
    .then((result) => {
        res.send(JSON.stringify(NewUrl.short))
        console.log(result)
    }) 

});

router.get('/api/get', (req, res) => {
    Shorts.get(req.body.short)
        .then((result) => {
            res.send(result)
        })
});

export default router;