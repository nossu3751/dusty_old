const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const regions = [
    {id: 1, name: 'region1'},
    {id: 2, name: 'region2'},
    {id: 3, name: 'region3'},
];

app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");

app.use('/css', express.static(path.join(__dirname, 'node_module/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));

app.get("/", (req,res) => {
    res.render("index");
});

app.get("/regions", (req,res) => {
    res.send(regions);
});

app.get("/regions/:id", (req,res) => {
    const region = regions.find(r => r.id === parseInt(req.params.id));
    if(!region) {
        res.status(404).send("This region does not exist!");
    }
    res.send(region);
});

app.post('/regions', (req,res) => {
    console.log(req.body);
    if(!req.body.name){
        res.status(400).send("please enter the region's name.");
        return;
    }
    const region = {
        id: regions.length + 1,
        name: req.body.name,
    };

    regions.push(region);
    res.send(region);
});

app.delete('/regions/:id', (req, res) => {
    const course = regions.find(r => r.id === parseInt(req.params.id));
    if(!region) res.status(404).send("This region doesn't exist!");
});

// PORT
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`covid website is running on port ${port}.`);
});