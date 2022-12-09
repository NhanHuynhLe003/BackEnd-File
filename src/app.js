
/**
 * bai 11:
 * cach them file tinh:
 * b1: tao thu muc public chua file tinh
 * b2: ben trong app.js: app.use(express.static(path.join(__dirname, 'public'))); (*)
 * b3: public se chuyen thanh localhost:3000 de kiem tra=> localhost:3000/img/Nodejs_logo.png
 * 
 * cach cai scss
 * b1: cai dat: npm i node-sass --save-dev  
 * b2: trong resources tao file "scss", sau do trong file scss tao file "app.scss"
 *     dong thoi trong public tao "thu muc css" de lat convert
 * b3: vao file package.json trong "script" them << "watch":"node-sass --watch src/resources/scss/app.scss src/public/css/style.css" >>
 * b4: link css vao main: <link rel="stylesheet" href="/css/app.css">
 * b4.1: extend khi chi can luu file scss thi tu dong thay doi: "watch": "node-sass --watch src/resources/scss/ --output src/public/css/",
 * !important: luu y khi duong dan da thay doi sang public, thi luc nay link css: "/css/app.css"
 */

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

app.use(express.static(path.join(__dirname, 'public'))); //bai11
app.use(express.urlencoded({
    extended: true //bai 14: cach ngan bao loi
})); // xu ly duoi dang form html
app.use(express.json()) //gui data tu js len sẻver

const port = 3000; //thinh thoang port co van de ta phai doi port
const direct = '/bai11';
app.get(direct, (req,res) => {
    res.render('home')
});
app.get("/formSearch", (req,res) => {
    res.render('search')
});
app.post("/formSearch", (req,res) => {
    console.log(req.body); //bai 14: req body ban dau = undefined, phai dung middleware mới hiển thị data.
    // data hiển thị ra bên trong trình duyệt -> Network -> payload -> Form Data
    res.send("");
})
app.listen(port, () => {
    console.log(`localhost:${port}${direct}`)
})