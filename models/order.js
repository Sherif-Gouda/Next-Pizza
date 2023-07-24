import { Schema, model, models } from "mongoose";

const orderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    items: {type: [{
        item: {
            type: Schema.Types.ObjectId,
            ref: 'MenuItem'
        },
        quantity: Number
    
    }],
    required: true

},

    total: Number,
    date: {
        type: Date,
        required: true
    }
})

const Order = models.Order || model("Order", orderSchema)

export default Order