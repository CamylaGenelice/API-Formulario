import model from "../model/model.user.js"

 const getId= async (id) => {
    if (!id || isNaN(id)) {
        throw new Error ('Id invalido')
    }
    const a = await model.findById(id)
    console.log('Aqui esta ', a)
    return a
}

 const createUserS = async (nome,email,senha) => {
    try {
       // const emailEmUso = await model.getUser(email)

        const a = await model.createUser(nome,email,senha)
        console.log("Cadastro realizado com sucesso!")
        return a
    } 
    catch (error) {
        console.log('Erro detalhado: ',error)
        throw new Error ("Erro ao criar usuario")
    }
    
}

 const getAll = async () => {
    const a = await model.getAllUsers()
    return a
}
 const updateEmailS = async (email,email2) => {
    try {
        if(!model.getUser(email)){
        console.log('Erro: email invalido')
    }
        const a = await model.updateEmail(email,email2)
        return a
    }
     catch (error) {
        throw new Error("Erro ao atualizar dados")
    }
    
}

 const updateSenhaS = async (email,senha) => {
    try {
        if (!model.getUser(email)){
            console.log('Email invalido')
    }
        const a = await model.updateSenha(email,senha)
        return a
    } 
    catch (error) {
        throw new Error ("Erro ao atualizar o usuario")
    }
    
}

 const getUserS = async (email) => {
    try {
        if( await !model.getUser(email)){
            console.log('Email invalido')
        }
        const a = await model.getUser(email)
        if(!a){
            throw new Error('Usuario não encontrado')
        }
        return a
    } 
    catch (error) {
        console.log('erro no services ',error)
        throw new Error ("Erro ao buscar o usuario")
    }
}

 const deleteUser = async (email) => {
    try {
        
        const a = await model.deleteUser(email)
        return a
    } catch (error) {
        throw new Error ("Erro ao deletar usuario")
    }
}

export default{deleteUser,getAll,getUserS,getId,updateSenhaS,updateEmailS,createUserS}