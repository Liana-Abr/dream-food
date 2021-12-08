const connectDB = function(){
    const MongoClient = require("mongodb").MongoClient;
    const uri = "mongodb+srv://Liana:<password>@cluster0.zfsq6.mongodb.net/food?retryWrites=true&w=majority"
    return new MongoClient(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}
module.exports = connectDB;