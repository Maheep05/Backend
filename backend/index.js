const express = require("express");
const cors = require('cors');


const app = express();


app.get("/", (res, req) => {
  res.send("active routes are --> /jokes");
});

// standard way of writing API's  
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "This is a joke",
      content: "joke 1",
    },
    {
      id: 2,
      title: "This is a joke",
      content: "joke 1",
    },
    {
      id: 3,
      title: "This is a joke",
      content: "joke 1",
    },
    {
      id: 4,
      title: "This is a joke",
      content: "joke 1",
    },
    {
      id: 5,
      title: "This is a joke",
      content: "joke 1",
    },
    {
      id: 6,
      title: "This is a joke",
      content: "joke 1",
    },
  ];

  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
