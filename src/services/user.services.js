
import User from "../models/User.js";

const create = (body) => User.create(body)

const getAll = () => User.find({})

const getUser = (email) => User.findOne({email:email})

const getUserById = (id) => User.findById(id)

const update = (id, name, sobreNome, email, password, tipo) => User.findOneAndUpdate({_id: id}, {name, sobreNome, email, password, tipo})

const erase = (id) => User.findOneAndDelete(id)

export default {create, getAll, getUser, update, getUserById, erase}