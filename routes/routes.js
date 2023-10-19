// File name: routes.js
/**Name: Pavankumar Patel
student ID: 301299711 
Course: Software Engineering Technician*/
import  express  from "express";
import { homecontroller } from "../controllers/homeController.js";
/**
 * Express router object for defining application routes.
 * @type {object}
 */
/**
 * Express router instance for handling routes.
 * @type {import('express').Router}
 */
const router = express.Router();


router.get("/", homecontroller);
export default router;