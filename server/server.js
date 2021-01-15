const express = require("express");
const connectDB = require("./db");
const path = require('path');

const app = express();

// Connect Database
connectDB();
app.use(express.static("public"));
app.use(express.static('frontend'));
app.get("/", (req, res) => {
  res.send("API Running");
});

app.use("/api/products", require("./routes/api/products"));
app.use("/api/featured-products", require("./routes/api/featured-products"));
app.use(
  "/api/best-selling-products",
  require("./routes/api/best-selling-products")
);
app.use("/api/product", require("./routes/api/product"));
app.use("/api/related-products", require("./routes/api/related-products"));
app.use('/api/get-nova-poshta-areas', require('./routes/api/get-nova-poshta-areas'));
app.use('/api/get-nova-poshta-division', require('./routes/api/get-nova-poshta-division'));
app.use('/api/calculate-delivery-cost', require('./routes/api/calculate-delivery-cost'));
app.use('/api/make-payments', require('./routes/api/make-payments'));
app.use('/api/fulfil-payments', require('./routes/api/fulfil-payments'));
app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'frontend', 'index.html'))
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
