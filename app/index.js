import express from "express";
import connectDB from "./config/connectDB";
import initRoutes from "./routes/web";
import configViewEngine from "./config/viewEngine";
import bodyParser from "body-parser";
import passport from "passport";
import session from "express-session";

let app = express();
let port = 3000;

// connect mongo db
connectDB();
app.use(passport.initialize());
configViewEngine(app);
app.use(bodyParser.urlencoded({extended: true}));
initRoutes(app);

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

app.use(passport.initialize());
app.use(passport.session());

app.listen(port, () => {
  console.log("Port 3000 is running");
});
