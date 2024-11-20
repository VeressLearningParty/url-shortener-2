import express from "express";
import Shorts from "../dao/dao.js";

const router = express.Router();

router.post('/short', (req, res) =>{
    let NewUrl = new Shorts();
    NewUrl.url = req.body.url;
    NewUrl.insert()
    .then((result) => {
        console.log(NewUrl)
        res.send(JSON.stringify(NewUrl.short))
    }) 

});

router.get("/get/:shortId", async (req, res) => {
    let short = await Shorts.get(req.params.shortId);
    res.json({url: short.url});
})

export default router;