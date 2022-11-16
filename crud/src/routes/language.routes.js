//Todas las rutas para manejar las peticiones
import { Router } from "express"
import { methods as languageController } from "../controllers/language.controller"

const router = Router()

router.get("/", languageController.getLanguages)
router.post("/", languageController.getLanguage)
router.get("/addLanguage", languageController.addLanguageGet)
router.post("/addLanguage", languageController.addLanguagePost)
router.get("/editLanguage/:id", languageController.editLanguageGet)
router.post("/editLanguage/:id", languageController.editLanguagePost)
router.get("/deleteLanguage/:id", languageController.deleteLanguage)

export default router