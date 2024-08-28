const express = require('express');

const app = express();

app.get("/", ((req,res) => {
  res.send("<h1>Hello World</h1>");
}))

app.get("/will", ((req,res) => {
  res.send("<h1>This will be my page</h1>");
}))

app.get("/about", ((req,res) => {
  res.send("<h1>This is about page</h1>");
}))


const port = process.env.PORT || 3000;



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

