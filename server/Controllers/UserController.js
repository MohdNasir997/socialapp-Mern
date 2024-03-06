import Users from '../Models/UserModel.js'
import PostModel from "../Models/PostModel.js"


// Get User
export const GetUser = async(req,res) => {
    try {
        const user = await Users.findById(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        res.json(error)
    }
}


// PUT likes

export const likes = async (req,res) => {
    const userId = req.query.user
    try {
        const post = await PostModel.findByIdAndUpdate(req.params.postId,{
            $addToSet:{likes:userId}
        })
        res.status(200).json('like successfully')

    } catch (error) {
        res.status(401).json(error)
    }
}

// Put dislikes
export const dislikes = async (req,res) => {
    const userId = req.query.user
    try {
        const post = await PostModel.findByIdAndUpdate(req.params.postId,{
            $pull:{likes:userId}
        })
        res.status(200).json('disliked')
    } catch (error) {
        res.status(401).json(error)
    }
}