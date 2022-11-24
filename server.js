const express = require("express");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var cors = require("cors");

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/contacts-DB");
mongoose.connect("mong


const db = mongoose.Collection;
db.on("error", (err) => {
  console.log(err);
});

db.once("open", () => {
  console.log("Database Connection Complete");
});

const contactRouter = require("./Api/routes/contact");

const Schema = mongoose.Schema;
const DemoSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  phone: {
    type: String,
    require: true,
  },
});

const Demo = mongoose.model("Contact", DemoSchema);

const app = express();
app.use(morgan("dev"));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

app.get("./demo", (req, res) => {
  const demo = new Demo({
    name: "Md.Tamim Hasan",
    phone: "01300306993",
  });
  demo.save();
});

app.use("/app/contact", contactRouter);

app.listen(PORT, () => {
  console.log(`Server In Running On PORT ${PORT}`);
});
