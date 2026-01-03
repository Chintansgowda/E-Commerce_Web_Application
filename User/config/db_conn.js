const mongoose = require('mongoose');
const redis = require('redis');
require('dotenv').config();

const redisClient = redis.createClient();

// --------------------
// MongoDB (LOCAL)
// --------------------

// Single environment variable for local MongoDB
// Example: mongodb://mongo:27017/ecommerce
const mongoUrl = process.env.MONGO_URL;

if (!mongoUrl) {
  console.error(" MONGO_URL is not defined");
  process.exit(1);
}

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(" User service connected to Local MongoDB"))
  .catch((err) => {
    console.error(" MongoDB connection error:", err);
    process.exit(1);
  });

module.exports = mongoose;
