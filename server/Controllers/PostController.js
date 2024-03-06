import PostModel from "../Models/PostModel.js"

export const getPost = async (req,res) => {
    const id = req.params.id
    try {
        const response = await PostModel.findById(id)
        res.status(200).json(response)
    } catch (error) {
        res.json(error)
    }
}

export const getposts = async (req,res) => {
    try {
        const response = await PostModel.find()
        res.json(response)
    } catch (error) {
        res.json(error)
    }
}

export const createpost = async (req,res) => {
    try {
        const newpost = await new PostModel({...req.body})
        const savedpost = await newpost.save()
        res.json(savedpost)
    } catch (error) {
        res.json(error)
    }
}

export const randompost = async (req,res) => {
    try {
        const response = await PostModel.aggregate([{$sample:{$size: 5}}])
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json(error)
    }
}


export const searchpost = async (req,res) => {
    const search = req.query.search
    try {
        const searchpost = await PostModel.find({title:{$regex: search,$options: "i"},}).limit(10)
        res.status(200).json(searchpost)
    } catch (error) {
        res.json(error)
    }
}

export const updatepost = async (req,res) => {
    try {
        
    } catch (error) {
        
    }
}