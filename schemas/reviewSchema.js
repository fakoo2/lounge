const Joi = require("joi");

const reviewSchema = Joi.object({
  comment: Joi.string().required().label("Review"),

  rating: Joi.number().integer().min(1).max(5).required().label("Rating"),

  //   createdAt: Joi.date().default(() => new Date()),
});

module.exports = reviewSchema;
