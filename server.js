import express from "express";

const app = express();

app.use("/", express.static("./dist"));


app.listen(3000, error => {
    if(error) {
        console.log(error);
        return;
    }
    console.log("Server started");
})