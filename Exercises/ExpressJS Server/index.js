import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send('<h1>Hello World!</h1>');
});

app.get("/about", (req, res) => {
    res.send('<h1>About Me Page</h1><p>My name is Yordan</p>');
});

app.get("/contact", (req, res) => {
    res.send('<h1>Contact Us</h1><p>Email:yordansoftskills@gmail.com</p>');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});