import { Router } from "express";
const router = Router();

/**importing all controllers */
import * as controller from "../controller/apicontroller.js";

/**POST METHOD */
router.route("/register").post(controller.register);
router.route("/registerMail").post();
router.route("/authenticate").post();
router.route("/login").post(controller.login);

/**GET METHOD */
router.route("/user/:username").get();
router.route("/generateOTP").get();
router.route("/verifyOTP").get();
router.route("/createResetSession").get();
/**PUT METHOD */

export default router;
