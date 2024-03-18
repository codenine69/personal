import { Router } from "express";

// controllers
import * as CtrlPersonal from "./personal.controller";


const router = Router();
router.get("/obtiene", CtrlPersonal.getAllPersonal);
// router.post("/", CtrlPersonal.createPersonal);


export default router;
