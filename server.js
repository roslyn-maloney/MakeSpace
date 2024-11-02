import { createRequestHandler } from "@remix-run/express";
import express from "express";

const viteDevServer =
  process.env.NODE_ENV === "production"
    ? null
    : await import("vite").then((vite) =>
        vite.createServer({
          server: { middlewareMode: true },
        })
      );

const app = express();
app.use(
  viteDevServer
    ? viteDevServer.middlewares
    : express.static("build/client")
);

const build = viteDevServer
  ? () =>
      viteDevServer.ssrLoadModule(
        "virtual:remix/server-build"
      )
  : await import("./build/server/index.js");

app.all("*", createRequestHandler({ build }));

app.listen(3000, () => {
  console.log("App listening on http://localhost:3000");
});

const mysql = require('mysql');

const connection = mysql.createConnection({
                                              host: 'localhost',
                                              user: 'root',
                                              password: '323849',
                                              database: 'SellingSetup'
                                          });

// Connect to the database
connection.connect(function(err) {
    if (err) {
        console.error('Error connecting to database: ' + err.stack);
        return;
    }

    console.log('Connected as id ' + connection.threadId);
});

connection.query('SELECT * FROM SellingSetup', function(err, results, fields) {
    if (err) throw err;

    console.log(results); // Print the results of the query.
});

connection.end();