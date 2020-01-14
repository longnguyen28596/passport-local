import express from "express";

let configViewEngine = (app) => {
  app.use(express.static("./app/public"));
  app.set("view engine", "ejs");
  app.set("views", "./app/views");
};

module.exports = configViewEngine;
