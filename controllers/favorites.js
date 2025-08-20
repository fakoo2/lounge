const User = require("../models/user");

module.exports.showFavorites = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate("favorites");
    const favorites = user.favorites;

    res.render("favorite/index", { favorites });
  } catch (e) {
    console.error("Favorites load error:", e);
    req.flash("error", "Cannot load favorites");
    res.redirect("/listing");
  }
};

module.exports.addFavorite = async (req, res) => {
  const { id } = req.params;
  const user = req.user;
  if (!user.favorites.includes(id)) {
    user.favorites.push(id);
    await user.save();
  }
  res.redirect(req.get("referer") || "/listing");
};

module.exports.removeFavorite = async (req, res) => {
  const { id } = req.params;
  const user = req.user;
  user.favorites = user.favorites.filter(favId => favId.toString() !== id);
  await user.save();
  res.redirect(req.get("referer") || "/listing");
};

