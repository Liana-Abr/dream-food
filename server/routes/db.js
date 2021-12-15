const connectDB = function(){
    const MongoClient = require("mongodb").MongoClient;
    const user = process.env.DBNAME || "Liana";
    const pwd = /*process.env.DBPASS ||*/ "Liana123456789";
    const uri =`mongodb+srv://${user}:${pwd}@cluster0.zfsq6.mongodb.net/food?retryWrites=true&w=majority`
    return new MongoClient(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}
module.exports = connectDB;

