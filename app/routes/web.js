import express from "express";
import passport from "passport";
import users from "../controllers/UsersController";
import initPassportLocal from "../controllers/auth/passportLocal";

let router = express.Router();

initPassportLocal();

let initRoutes = (app) => {
  router.get("/", users.index);
  router.get("/login", users.login);
  router.post("/login", passport.authenticate('local',{
    failureRedirect: "/login",
    successRedirect: '/'
  }));
  router.get('/fakeUser', users.fakeUser);

  return app.use("/", router);
};

module.exports = initRoutes;
