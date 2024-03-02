import mongoose, {Schema} from 'mongoose'

const schema = Schema;

const UserSchema = schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
    },
    ImgUrl:{
        type:String
    },
    fromGoogle:{
        type:Boolean,
        default:false
    },
    fromTwitter:{
        type:Boolean,
        default:false
    }
},
{timestamps:true}
)

export default mongoose.model('Users',UserSchema)