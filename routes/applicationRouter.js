import express from 'express';
import {empolyerGetAllApplications, jobSeekerDeleteApplication, jobSeekerGetAllApplications, postApplication } from "../controllers/applicationController.js";
import {isAuthenticated} from "../middlewares/auth.js";

const router = express.Router();

router.get("/jobseeker/getall", isAuthenticated, jobSeekerGetAllApplications);
router.get("/employer/getall", isAuthenticated, empolyerGetAllApplications);
router.delete("/delete/:id", isAuthenticated, jobSeekerDeleteApplication);
router.post("/post", isAuthenticated, postApplication);


// applicationRoutes.js

// Route to fetch archived applications
router.get("/archived", isAuthenticated, (req, res) => {
    req.query.status = "archived";
    getApplications(req, res);
});

// Route to fetch forwarded applications
router.get("/forwarded", isAuthenticated, (req, res) => {
    req.query.status = "forwarded";
    getApplications(req, res);
});

export default router;