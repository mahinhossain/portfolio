const app = require("./app");
const User = require("./UserModel");

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/my-portfolio", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log("error---", err));
// post

app.post("/post", (req, res) => {
  var myData = new User(req.body);
  myData
    .save()
    .then((item) => {
      res.send("item saved to database");
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
});
app.get("/post", async (req, res) => {
  var myData = await User.find({});
  res.send(myData);
});

const port = 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}..ok........`);
});
