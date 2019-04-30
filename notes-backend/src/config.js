import mongoose from "mongoose";

mongoose.Promise = global.Promise;

const url = 'mongodb://localhost:27017/graphqldb';

export function connect() {
    mongoose
        .connect(url, {useNewUrlParser: true, useCreateIndex: true})
        .then(() => console.log("Database connection successful"))
        .catch(err => console.log(err));
}

mongoose.connection.once('open', () => console.log(`Connected to mongo at ${url}`));