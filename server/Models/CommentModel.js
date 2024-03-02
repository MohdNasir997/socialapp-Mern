import mongoose, {Schema} from 'mongoose'

const schema = Schema;

const CommentsSchema = schema({
    UserId: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    PostId: {
        type: String,
    },
},
{timestamps:true}
)

export default mongoose.model('comments',CommentsSchema)