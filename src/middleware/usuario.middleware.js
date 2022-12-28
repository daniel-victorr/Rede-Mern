import mongoose from "mongoose";
import userServices from "../services/user.services.js";

export const validUser = async (req, res, next) => {
    try {
        const id = req.params.id
        const user = await userServices.getUserById(id)
 
        if (!user) {
            return res.status(404).send({ message: "User not found" })
        }

        res.user = user
        next()
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

export const validId = async (req, res, next) => {
    try {
        const id = await req.params.id

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send({ message: "Invalid id" })
        }
        
        req.id = id;
        next()
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}