const express = require('express')
const router = express.Router()
const Maincontroller = require("../controllers/MainController")


router.route("/signup").post(Maincontroller.signup)
router.route("/login").post(Maincontroller.login)
router.route("/send-OTP").post(Maincontroller.sendOTP)
router.route("/change-password").post(Maincontroller.changePassword)
router.route("/dashboard-page").get(Maincontroller.dashboard)
router.route("/googleLogin").post(Maincontroller.googleLogin)
router.route("/facebooklogin").post(Maincontroller.facebooklogin)

module.exports = router;