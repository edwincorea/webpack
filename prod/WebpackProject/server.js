const express = require("express");
const path = require("path");

const app = express();

// server routes...
app.get("/api", (req, res) => res.send({api: "API version 0.1"}));

if (process.env.NODE_ENV !== "production"){
    const webpackMiddleware = require("webpack-dev-middleware");
    const webpack = require("webpack");
    const webpackConfig = require("./webpack.config.js");    
    app.use(webpackMiddleware(webpack(webpackConfig)));
}
else {
    app.use(express.static("dist")); //make /dist freely available for user access
    //compatibility with react router and browser history module
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "dist/index.html"));
    });
}

app.listen(process.env.PORT || 3050, () => console.log("Listening"));