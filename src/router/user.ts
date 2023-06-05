import { Router } from "express";
import userController from "../controllers/user_controller";
import { authenMiddleware } from "../middleware/authen";

const router = Router();

router.get("/", authenMiddleware, userController.index);
router.get("/:id", userController.show);
router.post("/", userController.create);
router.delete("/:id", userController.remove);
router.put("/", userController.update);

export default router;
