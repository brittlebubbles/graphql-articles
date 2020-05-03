const express = require("express");
const app = express();
const db = require("./config/db");
const graphqlHttp = require("express-graphql");
const graphqlSchema = require("./graphql/schema");
const graphqlResolvers = require("./graphql/resolvers");

// Initialize Express

db.connect();

app.use(
  "/graphql",
  graphqlHttp({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log("Server is runnning on Port 3000");
});
