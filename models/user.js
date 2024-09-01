import mongoose, {Schema, models} from 'mongoose';


const userSchema = new Schema ( {
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
}, {timestamps: true}); //By adding time stamp it will store when the data is updated

const User = models.User || mongoose.model("User", userSchema);
//If I already have the model then it will just return the user
//or(||) after this If I don't have the model it will create with the userScehma

export default User;