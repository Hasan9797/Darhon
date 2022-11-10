import Router from "express";
const router = Router();
import {
  getAllHonadon,
  getOneHonadon,
  addNewHonadon,
  updateHonadon,
  deleteHonadon,
} from "../controller/honadon.js";

router.post("/", addNewHonadon);
router.put("/update/:id", updateHonadon);
router.get("/", getAllHonadon);
router.get("/:id", getOneHonadon);
router.delete("/delete/:id", deleteHonadon);

export default router;
