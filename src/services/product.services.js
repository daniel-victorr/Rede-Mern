import Product from '../models/Product.js'

const getAll = () => Product.find({})

const getProduct = (name) => Product.find({name: name})

const getById = (id) =>  Product.findOne({id: id})

const create = (body) => Product.create(body)

const update = (id, name, preco, qtd) => Product.findOneAndUpdate({id:id}, {name, preco, qtd})

export default { getAll, create, getProduct, update, getById }