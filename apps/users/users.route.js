import express from "express";
import userController from "./users.controller"
const router = express.Router()

router.post('/create', (req, res) => {
    userController.create(req, res);
});

router.post('/auth', (req, res) => {
    userController.auth(req, res);
});

// curl -v --cookie "connect.sid=s%3Ah9_7V5PCI7zC-gnPPE2ePbUNXbXaLw-Y.rfohfVe%2B6H2e8tedNkA40RhDEcqGIznjofPdxomtajo; Path=/;" http://127.0.0.1:3000/users/protected
router.get('/protected', (req, res) => {
    userController.protected(req, res);
});

export default router;
