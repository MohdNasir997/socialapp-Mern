import Users from '../Models/UserModel.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const signIn = async (req,res) => {
    try {
        
    } catch (error) {
        
    }
}

export const signOut = async (req,res) => {
    try {
        
    } catch (error) {
        
    }
}

export const Register = async (req,res) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = await Users({...req.body,password:hash})
        res.status(200).json('User sucessfully created')
        await newUser.save()
    } catch (error) {
        res.json(error)
    }
}