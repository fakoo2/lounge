const Joi = require("joi");

const bookingSchema = Joi.object({
  date: Joi.date()
    .min('now')
    .required()
    .messages({
      'date.base': 'Please enter a valid date',
      'date.min': 'Booking date cannot be in the past',
      'any.required': 'Date is required'
    }),
  guests: Joi.number()
    .integer()
    .min(1)
    .max(20)
    .required()
    .messages({
      'number.base': 'Guests must be a number',
      'number.min': 'At least 1 guest required',
      'number.max': 'Maximum 20 guests allowed',
      'any.required': 'Number of guests is required'
    }),
});

module.exports = bookingSchema;
