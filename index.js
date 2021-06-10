
const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');




app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(process.env.PORT, () => {
    console.log(`Serving on 3000`);
})