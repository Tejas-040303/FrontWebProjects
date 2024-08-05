import Joi from "joi";

const imageSchema = Joi.object({
    filename: Joi.string().allow("",null),
    url: Joi.string().uri().default("https://unsplash.com/photos/a-bed-sitting-in-a-bedroom-next-to-a-window-OZhn6zYiVVE").allow("",null)
});

const listingSchema = Joi.object({
    listing : Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        image: imageSchema,
        price: Joi.number().required().min(0),
        location: Joi.string().required(),
        country: Joi.string().required(),
    })
});

const reviewSchema = Joi.object({
    review : Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment: Joi.string().required()
    })
}).required()

export { listingSchema, reviewSchema };
