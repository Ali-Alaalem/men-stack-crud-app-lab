const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URI);
const db = mongoose.connection;
db.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});
