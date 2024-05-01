const http = require('http');
const express =  require("express")

const app = express();

const DataRoute = require("./routes/data")


app.use('/data', DataRoute);


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server Started at ${port}`);
})