import express from "express";
import logger from "morgan";
import path from "path";
import {resolvers, typeDefs} from "./Schema";
import {ApolloServer} from "apollo-server-express";
import * as Database from "./config";

/*Connect Database*/
Database.connect();

const app = express();
const server = new ApolloServer({typeDefs, resolvers});
server.applyMiddleware({app});

app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "public")));

export default app;
