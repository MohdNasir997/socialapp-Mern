import Users from '../Models/UserModel.js'

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
    try {
        
    } catch (error) {
        
    }
}