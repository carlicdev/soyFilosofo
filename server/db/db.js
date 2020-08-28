const mongoose = require('mongoose');

const dbUser = process.env.MONGO_DB_USER;
const dbPassword = process.env.MONGO_DB_PASS;
const dbName = process.env.MONGO_DB_NAME;

const URI = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.r8qb2.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(URI, {useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true})
    .then(() => console.log('Connected to DB'))
    .catch(err => console.log(err))

module.exports = mongoose;