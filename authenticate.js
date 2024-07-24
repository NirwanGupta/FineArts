require("dotenv").config();
var passport = require("passport");
var JwtStrategy = require("passport-jwt").Strategy;
var ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("./models/User/user");
const jwt = require("jsonwebtoken");
var opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // toe get token from the auth header
  secretOrKey: process.env.secretKey, // secret key
  passReqToCallback: true, //to pass req to the callback
};

exports.jwtPassport = passport.use(
  new JwtStrategy(opts, async (req, jwt_payload, done) => {
    User.findOne(
      { _id: jwt_payload._id, "tokens.token": opts.jwtFromRequest(req) },
      (err, user) => {
        if (err) {
          return done(err, false);
        } else if (user) {
          req.token = opts.jwtFromRequest(req);
          return done(null, user);
        } else {
          return done(null, false);
        }
      }
    );
  })
);

passport.serializeUser(function (user, done) {
  console.log("I should have jack ");
  done(null, user);
});
passport.deserializeUser(function (obj, done) {
  console.log("I wont have jack shit");
  done(null, obj);
});

exports.verifyUser = passport.authenticate("jwt", { session: false });

exports.verifyAdmin = (req, res, next) => {
  User.findOne({ _id: req.user._id })
    .then(
      (user) => {
        
        if (user.admin) {

          next(); //move ahead only if user is admin
        } else {
          res.status(403).json({ msg: "Admin access required !!" });
          return next(res);
        }
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
};

exports.isVerifiedUser = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then(
      (user) => {
        if(!user)
        {
          res
            .status(400)
            .json({ error: "Email Does not Exits" });

        }

        else if (user.isVerified) {
          next();
        } else {
          res
            .status(400)
            .json({ msg: "Your account has not been verified !!" });
          return next(res);
        }
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
};

exports.verifyToken = (req, res) => {
  if (!opts.jwtFromRequest(req)) {
    return res.status(404).json({ success: false, error: "Token Missing !!" });
  } else {
    jwt.verify(
      opts.jwtFromRequest(req),
      process.env.secretKey,
      (err, decoded) => {
        if (err) {
          return res
            .status(401)
            .json({ success: false, error: err.message, status: err.name });
        }
        if (!decoded) {
          return res
            .status(500)
            .json({ success: false, error: "Something went wrong" });
        }
        return res
          .status(200)
          .json({ success: true, status: "Token Valid !!", user: decoded._id });
      }
    );
  }
};