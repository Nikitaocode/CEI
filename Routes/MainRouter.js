const express = require('express')
const router = express.Router()
const Maincontroller = require("../controllers/MainController")
const UtilitiesController = require("../controllers/UtilitiesController")
const UserManagementController = require("../controllers/UserManagementController")


router.route("/signup").post(Maincontroller.signup)
router.route("/login").post(Maincontroller.login)
router.route("/send-OTP").post(Maincontroller.sendOTP)
router.route("/change-password").post(Maincontroller.changePassword)
router.route("/dashboard-page").get(Maincontroller.dashboard)
router.route("/googleLogin").post(Maincontroller.googleLogin)
router.route("/facebooklogin").post(Maincontroller.facebooklogin)
router.route("/countries").get(UtilitiesController.countries)
router.route("/edit-profile").post(Maincontroller.editprofile)
router.route("/userData").get(Maincontroller.userData)
router.route("/users").get(UserManagementController.users)
module.exports = router;