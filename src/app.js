const express = require("express");
const app = express();


app.set("view engine", "ejs");
app.set("views", __dirname + "/views");


app.use(require("./routes/detail-product"));







app.listen(3000, () => console.log(`Servidor en puerto 3000`));