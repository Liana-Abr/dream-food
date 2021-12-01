const router = require("express").Router();
const fs = require("fs");

let data = "";
const readFile = (path) => {
    return fs.readFileSync(path,"utf-8");
}

data = readFile("./data/fruits.csv");
data = data.split("\n");

console.log(data);

const Product = function(prArr){
    let names = data[0].split(";");
    /*
        [name;b;h;u;kcal;type]
        [Авокадо,1.9,23.5,6.7,223,Фрукты]
    */
    names.forEach((name, i ) => {this[name] = prArr[i]})
}

let first = new Product(data[1].split(";"));
//console.log(first);
const products = [];


for(let i = 1;i< data.length;i++ ){
    products.push(new Product(data[i].split(";")));
}
router.post("/add", (req,res) =>{
    console.log(req.body) //получить тело формы
    res.send({msg: "done"});
});

router.get("/", (req,res) =>{
    res.render("index", {
        title: "Здоровый образ жизни",
        products: products    
    });
});

module.exports = router;