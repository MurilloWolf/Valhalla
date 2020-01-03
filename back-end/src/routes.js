import { Router } from "express";
import multer from "multer";
import uploadConfig from "./config/upload";

import UserController from "./controllers/UserController";
import SessionController from "./controllers/SessionController";
import CharacterController from "./controllers/CharacterController";

const routes = Router();
const upload = multer(uploadConfig);

routes.get("/", UserController.index);
routes.post("/users", UserController.store);
routes.get("/users", UserController.show);
routes.post("/usersUpdate", UserController.update);

routes.post("/newpost", upload.single("thumbnail"), CharacterController.store);
routes.get("/newpost", CharacterController.index);

routes.get("/sessions", SessionController.login);

export default routes;
