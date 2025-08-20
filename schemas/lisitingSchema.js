const Joi = require("joi");

const listingSchema = Joi.object({
  title: Joi.string().required().messages({
    "string.empty": "Title is required",
    "any.required": "Title is required",
  }),

  description: Joi.string().required(),

  image: Joi.object({
    url: Joi.string()
      .uri()
      .allow("")
      .default(
        "https://images.unsplash.com/photo-1575310452551-5af1ad4a6dd5?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ),
    filename: Joi.string().allow("").default(""),
  }),

  price: Joi.number().min(0).required(),

  location: Joi.string().required(),

  country: Joi.string().required(),
});

module.exports = listingSchema;
