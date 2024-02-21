import { Schema } from "mongoose";

export const PlanetSchema = new Schema(
    {
        name: { type: String, required: true, maxlength: 15, minlength: 3 },
        emoji: { type: String, required: true, maxlength: 15, minlength: 3 },
        creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
    },
    {
        timestamps: true,
        toJSON: { virtuals: true }
    }

)

PlanetSchema.virtual('creator', {
    localField: 'creatorId',
    ref: 'Account',
    foreignField: '_id',
    justOne: true
})