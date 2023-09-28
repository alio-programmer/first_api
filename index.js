
import express from 'express';
const app = express();
const PORT = 6060;

app.listen(
    PORT,
    () => console.log('server running on:',PORT)
);

app.get("/", (req,res) => {
    res.send("fruis are banana and apple")
});