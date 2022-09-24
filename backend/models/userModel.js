import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        require: true
    },
    isAdmin:{
        type: Boolean,
        required: true,
        default: false

    }
}, {

timestamps: true

})
const Users = mongoose.model('Users', userSchema)
export default Users 