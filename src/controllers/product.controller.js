import productServices from '../services/product.services.js'
import mongoose from 'mongoose'

const update = async (req, res) => {
    try {
        const id = req.params

        // if (!id === req.id){
        // return res.status(400).send({message: 'Você não pode editar esse product'})
        // }

        const { name, descricao, preco, qtd } = req.body
        
        if(!name && !preco && !qtd){
            return res.status(400).send({message: 'Preencha os campos'})
        }
        await productServices.update(id, name, descricao,  preco, qtd)
        res.status(201).send({message: 'Atualizado'})
    } catch (err) {
        res.status(500).send({message: err.message})
    }
}

const getAll = async (req, res) => {
    try {
        const product = await productServices.getAll()
        .catch((err) => console.log(err.message))

        if(product.length === 0){
            return res.status(404).send({message: "There are no registered products"})
        }
        res.status(200).send(product)
    } catch (err) {
        res.status(500).send({message: err.message})
    }
}

const create = async (req, res) => {
    try {

        const { name, descricao, preco, qtd } = req.body

        if(!name || !descricao|| !preco || !qtd){
            return res.status(500).send({message: "Preencha todos os campos!"})
        }

        const product = await productServices.getProduct(name)
      
        console.log(product)
        if(! product.length == ''){
           return res.status(500).send({message: "Error creating Product"})
        }

        await productServices.create(req.body)
        .catch((err) => console.log(err.message))

       res.status(201).send({message: "Created Product"}) 
    } catch (err) {
       res.status(500).send({message: err.message}) 
    }
}

const getByProduct = async (req, res) => {
    try {

        const id = req.params
        
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send({ message: "Invalid id" })
        }

        const product = await productServices.getById(id)
        .catch((err) => console.log(err.message))

        if (!product) { //Fazer um medlleware para product
           return res.status(404).send({message: "Product not found"}) 
        }

        res.status(201).send(product) 
    } catch (err) {
        res.status(500).send({message: err.message}) 
    }
}



export { getAll, create, update, getByProduct }