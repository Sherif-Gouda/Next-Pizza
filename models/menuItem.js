import {Schema, model, models} from 'mongoose'

const menuItemSchema = new Schema({
    name: String,
    description: String,
    image: String,
    price: Number
})

const MenuItem = models.MenuItem || model("MenuItem", menuItemSchema)

export default MenuItem;