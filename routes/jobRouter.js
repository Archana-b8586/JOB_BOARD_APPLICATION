import express from 'express';
import { getAllJobs, getMyJobs, postJob, updateJob, deleteJob, getSingleJob } from '../controllers/jobController.js';
import { isAuthenticated } from '../middlewares/auth.js';

const router = express.Router();

router.get("/getjobs", getAllJobs);
router.post("/post", isAuthenticated, postJob);
router.get("/getmyjobs", isAuthenticated, getMyJobs);
router.put("/updatejob/:id", isAuthenticated, updateJob);
router.delete("/deletejob/:id", isAuthenticated, deleteJob);
router.get("/:id", isAuthenticated, getSingleJob);

export default router;