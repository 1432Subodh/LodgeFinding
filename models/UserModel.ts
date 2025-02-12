import mongoose from 'mongoose'

const user = new mongoose.Schema({
    username: {
        type : String,
        require: true
    },
    firstname: {
        type : String,
    },
    lastname: {
        type : String,
    },
    email:{
        type : String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require: true,
    },

    isVerified : {
        type: Boolean,
        default: false
    },
    isAdmin:{
        type:Boolean,
        default: false
    },
    adminRequest:{
        type:Boolean,
        default:false
    },
    userLodge :{
        type:Array
    },
    adminVerificationToken : String,
    adminVerificationTokenExpiry : Date,
    verificationToken: String,
    verificationTokenExpired: String,
    forgotPasswordToken: String,
    forgotPasswordTokenExpired: String,
    
});

const userSchema = mongoose.models.users || mongoose.model('users', user)
export default userSchema