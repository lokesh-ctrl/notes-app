import express from "express";
import indexRouter from "./routes";
import usersRouter from "./routes/users";
import logger from "morgan";
import path from "path";
import graphqlHTTP from "express-graphql";
import {buildSchema} from "graphql";

const app = express();

// Construct a schema, using GraphQL schema language

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
    hello: () => {
        return 'Hello world!';
    },
};

app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

export default app;
