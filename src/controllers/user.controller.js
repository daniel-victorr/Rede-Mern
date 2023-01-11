import userServices from '../services/user.services.js'

const getById = async (req, res) => {
     try {
        const id = req.id    
        const user = await userServices.getUserById(id)
        .catch((err) => console.log(err.message))

        res.status(201).send(user)
     } catch (err) {
        res.status(500).send({ message: err.message })
     }
}

const getAll = async (req, res) => {
    try {

        const users = await userServices.getAll()
        .catch((err) => console.log(err.message))

        if (users.length === 0) {
             res.status(404).send({ message: "There are no registered users" })
        }

        res.status(200).send(users)
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

const create = async (req, res) => {
    try {

        const { nome, sobreNome, email, password, tipo } = req.body

        if (nome === '' || sobreNome ==='' || email === '' || password === '' || tipo === '') {
            return res.status(401).send({ message: 'Preencha todos os campos para fazer o cadastro' })
        }

        const user = await userServices.getUser(email)

        if (user) {
            return res.status(400).send({ message: "Error creating User" })
        }

        await userServices.create(req.body)
            .catch((err) => console.log(err.message))

        res.status(200).send({ message: 'User Created' })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}

const update = async (req, res) => {
    try {

        const id = req.id
        const { nome, sobreNome, email, password, tipo } = req.body

        if (!nome && !sobreNome && !email && !password && !tipo) {
            return res.status(400).send({ message: "Submint at least one field for update" })
        }

        await userServices.update(id, nome, sobreNome, email, password, tipo)
        .catch((err) => console.log(err.message))

        res.status(201).send({ message: "User successfully updated" })
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

const erase = async (req, res) => {
    try {
       const id = req.id
       await userServices.erase(id)
       .catch((err) => console.log(err.message)) 

       res.status(201).send({message: "User deleted success"})

    } catch (err) {   
       res.status(500).send({ message: err.message })
    }
} 

export { getAll, create, update, getById, erase }

