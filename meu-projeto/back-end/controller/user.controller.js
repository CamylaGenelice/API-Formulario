import mid from '../middlewares/mid.js'
import serv from '../services/serv.js'

const create = async (req,res) => {
    const {nome,email,senha} = req.body
    try {
         if (!nome || !email || !senha){
        mid.defaultErro(res)
    }
        if ( await serv.getUserS(email)){
            return res.status(401).json({msg: "Email já está em uso!"})
        }
        const consult = await serv.createUserS(nome,email,senha)
        return res.status(200).json(consult)
    } 
    catch (error) {
        console.error('Erro no controller:', error);
        return res.status(500).json({
            error: error.message || 'Erro ao processar requisição'
        })
    }
   
}

const getAllUsers = async (req, res) => {
    try {

        const consult = await serv.getAll()
        return res.status(200).json(consult)
    }
     catch (error) {
        res.status(404).json(error)
    }
    
}

const updateEmail = async (req,res) => {
    const {email,email2} = req.body
    
    if (!email || !email2){
        mid.defaultErro(res)
    }
    try {

        const consult = await serv.updateEmailS(email,email2)

        return res.status(200).json(consult)

    } 
    catch (error) {
        return res.status(500).json({
            error: error.message || 'Erro ao processar requisição'
        })
    }
}

const deleteUser = async (req,res) => {
    
    const {email} = req.body
    
     try {
        if(!email){
        mid.defaultErro(res)
    }

        const consult = await serv.deleteUser(email)

        if (!consult){
            return res.status(500).json({msg: "Email invalido! "})
        }
        return res.status(200).json(consult)
    }
     catch (error) {
        return res.status(500).json({
            error: error.message || 'Erro ao processar requisição'
        })
    }

}

const getUser = async (req,res) => {
    const {email} = req.body
   
    try {
        if(!email){
        console.log('Preencha todos os campos!')
        return res.status(400).json({error: "O servidor não conseguiu atender a requisição!"})
    }
        const consult = await serv.getUserS(email)

        if (!consult) {
            return res.status(404).json({error: "Usuario não encontrado"})
        }
        console.log('Usuario encontrado: ',consult)
        return res.status(200).json(consult)
        
    } 
    catch (error) {
        return res.status(500).json({
            error: error.message || 'Erro ao processar requisição'
        })
    }
}

export default {create,getAllUsers,updateEmail,deleteUser,getUser}