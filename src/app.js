

const express = require('express');
const { engine } = require("express-handlebars");
const path = require('path');
const morgan = require('morgan');
const { parse } = require('path');
const app = express();
app.use(morgan('combined'));
app.engine("hbs", engine({
    extname: ".hbs"
}));
app.set("view engine", "hbs");
app.set('views', path.join(__dirname, 'resources/views'));

app.use(express.static(path.join(__dirname, 'public'))); 
app.use(express.urlencoded({
    extended: true 
})); 
app.use(express.json()) 

const port = 3000; 
const direct = '/bai30';
app.get(direct, (req,res) => {
    res.render('home')
});
app.get("/formSearch", (req,res) => {
    res.render('search')
});
app.post("/formSearch", (req,res) => {
    res.send("");
})
app.listen(port, () => {
    console.log(`localhost:${port}${direct}`)
})