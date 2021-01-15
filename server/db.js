const mongoose = require('mongoose');
const config = require('config');
// const db = config.get('mongoURI');

let db;

try {
    db = config.get('mongoURI');
} catch (e) {
    db = process.env.mongoURI;
}

const connectDB = async () => {
    try {
        await mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;