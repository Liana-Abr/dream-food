const router = require("express").Router();
const e = require("express");
const { ConnectionCheckedInEvent } = require("mongodb");
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
                     console.log(req.body);
                     client.close();

             }
             });
            console.log("aaa");
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
router.delete("/del/:id", (req,res) => {
    const client = db();
    client.connect(err =>{
        if(err) {
            console.log(err);
            client.close();
        } else {
            const col = client.db("food").collection("products");
            console.log(req.params);
            col.deleteOne({"_id": req.params.id});
            client.close();
            res.send({"msg": "ok"});
        }
   
    });

});
module.exports = router;