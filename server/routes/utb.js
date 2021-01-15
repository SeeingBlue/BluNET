import express from "express";
import fs from "fs";

const router = express.Router();
const rawdata = fs.readFileSync("./json/utb.json");
const boxes = JSON.parse(rawdata);

router.get('/', (req, res) => {
    res.send(boxes);
});

export default router