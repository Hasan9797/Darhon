import Router from "express";
const router = Router();
import {
  getAllObject,
  getOneObject,
  addNewObject,
  updateObject,
  deleteObject,
} from "../controller/object.js";

router.post("/", addNewObject);
router.put("/update/:id", updateObject);
router.get("/", getAllObject);
router.get("/:id", getOneObject);
router.delete("/delete/:id", deleteObject);

export default router;
