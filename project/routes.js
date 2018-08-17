import express from "express";
import users from '../apps/users/users.route'

const router = express.Router();

router.use('/users', users);

export default router;
