import mongoose, {Schema} from 'mongoose'

const schema = Schema;

const PostSchema = schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    UserId: {
        type: String,
    },
    likes:{
        type: [String],
        default:[]
    },
    ImgUrl:{
        type:String
    },
},
{timestamps:true}
)

export default mongoose.model('Posts',PostSchema)