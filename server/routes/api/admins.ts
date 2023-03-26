import express from "express";
import {
  getAllAdmins,
  createNewAdmin,
  updateAdmin,
  deleteAdmin,
  getAdmin,
} from "../../controllers/adminsController";

export const router = express.Router();

router
  .route("/")
  .get(getAllAdmins)
  .post(createNewAdmin)
  .put(updateAdmin)
  .delete(deleteAdmin);

router.route("/:id").get(getAdmin);
