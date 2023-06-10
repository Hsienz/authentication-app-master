import {Schema, model, models} from 'mongoose'

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        require: [true, 'Email is required']
    },
    password: {
        type: String,
        require: [true, 'Password is required']
    }
})

const user = models['user'] || model('user', userSchema )

export default user