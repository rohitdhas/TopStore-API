const path = require("path");
const webpack = require("webpack");

const environment = process.env.ENVIRONMENT;

let ENVIRONMENT_VARIABLES = {
  "process.env.ENVIRONMENT": JSON.stringify("development"),
  "process.env.PORT": JSON.stringify("8080"),
  "process.env.MONGO_URI": JSON.stringify("mongodb://mongo-db:27017"),
};

if (environment === "test") {
  ENVIRONMENT_VARIABLES = {
    "process.env.ENVIRONMENT": JSON.stringify("test"),
    "process.env.PORT": JSON.stringify("8080"),
    "process.env.MONGO_URI": JSON.stringify("mongodb://mongo-db:27017"),
  };
} else if (environment === "production") {
  ENVIRONMENT_VARIABLES = {
    "process.env.ENVIRONMENT": JSON.stringify("production"),
    "process.env.PORT": JSON.stringify("8080"),
    "process.env.MONGO_URI": JSON.stringify(
      "mongodb+srv://rohitdhas:tihor@topstore-db.e4ghj.mongodb.net/topstore-database?retryWrites=true&w=majority"
    ),
  };
}

module.exports = {
  entry: "./server.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.js",
  },
  target: "node",
  plugins: [new webpack.DefinePlugin(ENVIRONMENT_VARIABLES)],
};
