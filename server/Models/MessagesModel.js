import mongoose, {Schema} from 'mongoose'

const schema = Schema;

const MessageSchema = schema({
    UserId: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    ToUser: {
        type: String,
    },
},
{timestamps:true}
)

export default mongoose.model('Messages',MessageSchema)