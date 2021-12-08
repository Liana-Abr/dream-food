const router = require("express").Router();
const db = require("./db.js");


router.post("/add",(req,res) =>{
    console.log(req.body);
    
    const client = db();
    client.connect(err => {
        if (err) {
            //aa
        } else{
            const table = client.db("food");
            const col = table.collection("products");
            col.insertOne(req.body, err =>{
                if (err) {
                    console.log(err);
                    client.close();
                } else {
                    client.close();

                }
            });

        }
    })
    res.send({msg: "done"});
     
})
router.get("/vegetables", (req,res) =>{
    const client = db();
    client.connect(err =>{
        if(err) {
            rs.send({"msg": "Error connection"});
        } else {
            const table = client.db("food");
            const col = table.collection("products");
            col.find({"type": "Овощи"}).toArray((err, data)=>{
                if (error){
                    console.log(error);
                } 
                console.log(data);
                res.send({"data": data});
            });
        }
        client.close()
    })

});
module.exports = router;