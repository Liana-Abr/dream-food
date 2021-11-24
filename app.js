const express = require("express");
const serverRouter = require("./server/routes/mainRouter")
const stylus = require("stylus");

const port = process.env.PORT || 3000;
const app = express();

app.use(stylus.middleware({
    //откуда куда
    src: "./public",
    dest: "./public"
}));

app.set("views", "./server/views");
app.set("view engine", "pug");

app.use(express.static("./public"))

app.use("/", serverRouter);

app.listen(port);

//запушить новую версию на гит git add . git commit -m "комментарий" git push origin master
