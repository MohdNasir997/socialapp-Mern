import Comments from '../Models/CommentModel.js'

// get comment by post
export const getComment = async (req,res) => {
    try {
        const comments = await Comments.find({PostId: req.params.postId})
        res.json(comments)
    } catch (error) {
        res.json(error)
    }
}

// Post comment
export const postComment = async (req,res) => {
    try {
        const newcomment = await new Comments({...req.body,PostId: req.params.postId})
        newcomment.save()
        res.json('saved comment')
    } catch (error) {
        res.status(401).json(error)
    }
}
