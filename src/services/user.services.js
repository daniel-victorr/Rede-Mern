
import User from "../models/User.js";

const create = (body) => User.create(body)

const getAll = () => User.find({})

const getUser = (email) => User.findOne({email:email})

const getUserById = (id) => User.findById(id)

const update = (id, name, email, password) => User.findOneAndUpdate({_id: id}, {name, email, password})

const erase = (id) => User.findByIdAndDelete(id)

export default {create, getAll, getUser, update, getUserById, erase}