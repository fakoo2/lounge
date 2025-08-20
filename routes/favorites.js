const express = require("express");
const router = express.Router();
const FavoritesController = require("../controllers/favorites");
const { isLoggedin } = require("../middleware");

router.get("/", isLoggedin, FavoritesController.showFavorites);

router.post("/add/:id", isLoggedin, FavoritesController.addFavorite);
router.post("/remove/:id", isLoggedin, FavoritesController.removeFavorite);

module.exports = router;
