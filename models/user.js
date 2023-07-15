import {Schema, model, models} from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Name is required!']
    },
    email: {
        type: String,
        required: [true, 'Email is required!'],
        unique: true
    },
    image: {
        type: String
    }
    
})

const User = models.User || model("User", userSchema)

export default User;