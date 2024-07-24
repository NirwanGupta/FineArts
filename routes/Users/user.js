const express= require("express");
require("dotenv").config();
const { registerUser, getUser, loginUser,logoutUser, logoutUserAll, verifyEmail, forgotPassword, verifyOtp} = require("../../controllers/User/user");
const router = express.Router();
const {verifyAdmin, verifyUser,isVerifiedUser, verifyToken} = require('../../authenticate');
const passport = require('passport');
const User = require("../../models/User/user");

router.post("/signup",registerUser);
router.get("/verify-email",verifyEmail);
router.get("/all",verifyUser,verifyAdmin,getUser);

router.post("/login",isVerifiedUser,loginUser);             //only verified user can login

router.get("/logout",verifyUser,logoutUser);
router.get("/logoutall",verifyUser,logoutUserAll);
router.put("/forgot",forgotPassword);
router.put("/otp/verify",verifyOtp);
router.get("/auth", verifyToken);
module.exports =router;
