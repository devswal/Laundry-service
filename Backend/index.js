//import User from './schema/userSchema';
const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const { Order } = require('./model')
//const Create = require("./routes/create");
const signin = require("./routes/signin");
//const SigninBlog = require("./schema/loginSchema");
// const jwt = require('jsonwebtoken');
//......................................mongo uri...................................................
const uri =
  "mongodb+srv://laundrycollab:Soa2KQDcBqdHvKmM@laundry.2rpjc1w.mongodb.net/?retryWrites=true&w=majority";
// replace with your own database name
//JWT_SECRET:"asdfghjkl"
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const port = 8080 || process.env.PORT;
mongoose
  .connect(uri, options)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(`Error connecting to MongoDB: ${err}`));

const app = express();
app.use(cors());
app.use(express.json());
// require('./schema/loginSchema')
// require("./schema/registerSchema")
app.use(require("./routes/signin"));

//const app = express();
//app.use("/create", Create);
app.use("/signin", signin);
require("./schema/registerSchema");
//app.use(require("./signIn"));
app.get("/signin", async (req, res) => {
  const data = await SigninBlog.find();
  console.log(data);
  res.status(200).json({
    status: "success",
    data,
  });
});
app.get('/', async (req, res) => {
  const orders = await Order.find({})
  if (orders.length>12) {
    console.log(orders)
  } else {
    let newOrder = new Order({
      orderID: "OR00012",
      orderDate: "28mar 2023 , 14:36",
      store: "Jp Nagar",
      city: "Bangalore",
      phone:"+91 99999999999",
      totalItems: 17,
      price: 220,
      status: "In Washing"
    })
    let savedOrder = await newOrder.save()
     
    console.log(savedOrder)
    return res.json(savedOrder)
  }
   return res.json(orders)
})

app.listen(8080, () => {
  console.log(`server starting up port ${port}!`);
});
