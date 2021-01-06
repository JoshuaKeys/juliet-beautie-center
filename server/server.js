const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();
app.use(express.static('public'))
app.get('/', (req, res)=> {
    res.send('API Running');
})

app.use('/api/products', require('./routes/api/products'));
app.use('/api/featured-products', require('./routes/api/featured-products'));
app.use('/api/best-selling-products', require('./routes/api/best-selling-products'));
app.use('/api/product', require('./routes/api/product'));

const PORT = process.env.PORT || 5000;


app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));