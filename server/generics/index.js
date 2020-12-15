const HOME_ROUTE="/home";
const BACK_ROUTE="back";
const SECRET_CRED = process.env.SECRET_CRED || "To love is to live To hate is to halt";
const ADMIN_KEY = process.env.ADMIN_KEY || "admin";
const JWT_SECRET = process.env.JWT_SECRET || "dev secret";
const GENERAL = "general";
const ERROR = "error";
const SUCCESS = "success";

const EXPRESS_SESSION_CREDS = {
  secret: SECRET_CRED,
  resave: false,
  saveUninitialized: false
};

const REDIRECTION = {
  successRedirect: HOME_ROUTE,
  failureRedirect: LOGIN_ROUTE,
  failureFlash: true
};

var exports = {
  SECRET_CRED: SECRET_CRED,
  ADMIN_KEY: ADMIN_KEY,
  LOGIN_ROUTE: LOGIN_ROUTE,
  BACK_ROUTE: BACK_ROUTE,
  USER_MODEL_PATH: USER_MODEL_PATH,
  EXPRESS_SESSION_CREDS: EXPRESS_SESSION_CREDS,
  REDIRECTION: REDIRECTION,
  SUCCESS: SUCCESS,
  ERROR: ERROR,
  GENERAL: GENERAL,

  isTrue: function (val) {
    return val && (val.toLowerCase() === "true" || val.toLowerCase() === "yes");
  }
 };


module.exports = exports;
