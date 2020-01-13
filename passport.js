import passport from "passport";
import GitHubStrategy from "passport-github";
import FacebookStrategy from "passport-facebook";
import User from "./model/user";
import { githubLoginCallback, facebookLoginCallback } from "./controllers/globalController";
import routes from "./routes";

passport.use(User.createStrategy());

passport.use(new GitHubStrategy({
    clientID: process.env.GH_ID,
    clientSecret: process.env.GH_SECRET,
    callbackURL: `http://localhost:4000${routes.githubCallback}`
  }, githubLoginCallback) 
);

passport.use(new FacebookStrategy({
  clientID: process.env.FB_ID,
  clientSecret: process.env.FB_SECRET,
  callbackURL: "https://9d3b7fc5.ngrok.io"
  }, facebookLoginCallback)
);

// passport.serializeUser((User, done) => done(null, User));
// passport.deserializeUser((User, done) => done(null, User));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());