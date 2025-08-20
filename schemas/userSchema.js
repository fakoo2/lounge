const Joi = require("joi");

const userSchema = Joi.object({
  username: Joi.string().required().label("Username"), // Automatically added by passport-local-mongoose
  password: Joi.string().required().label("Password"), // Also handled by passport-local-mongoose
  email: Joi.string().email().required().label("Email"),
});

module.exports = userSchema;
