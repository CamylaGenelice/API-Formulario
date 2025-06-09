import db from "../data/database.js"
import bcrypt from "bcrypt"


 const findById = async (id) => {
    const consult = await db.query('SELECT * FROM dados_do_formulario WHERE id = $1',[id])
    return consult.rows[0]
}
 const getAllUsers = async () => {
    const consult = await db.query('SELECT * FROM dados_do_formulario')
    return consult.rows
}
 const createUser = async (nome,email,senha) => {
    const saltRounds = 10
    const senhaHash = await bcrypt.hash(senha,saltRounds)

    const consult = await db.query('INSERT INTO dados_do_formulario (nome,email,senha) VALUES ($1,$2,$3) RETURNING *',[nome,email,senhaHash])
    return consult.rows[0]
}
// // Atualiza para o novo e-mail com base no email atual 
 const updateEmail = async (email1,email2) => {
    const consult = await db.query('UPDATE dados_do_formulario  SET email =$1 WHERE email = $2 RETURNING *',[email1,email2])
    return consult.rows[0]
}
const updateSenha = async (email,senha) => {
    const saltRounds = 10
    const senhaHash = await bcrypt.hash(senha,saltRounds)
    const consult = await db.query('UPDATE dados_do_formulario SET senha = $1 WHERE email = $2  RETURNING',[email,senhaHash])
    return consult.rows[0]
}
 const deleteUser = async (email) => {
    const consult = await db.query('DELETE FROM dados_do_formulario WHERE email = $1 RETURNING *',[email])
    return consult;
}
const getUser = async (email) => {
    try {
        const consult = await db.query('SELECT * FROM dados_do_formulario WHERE email = $1 ',[email])
        return consult.rows[0];
    } catch (error) {
        console.log('erro no model',error)
        throw error 
    }
    
}

export default {findById, getAllUsers,updateEmail,updateSenha,deleteUser,getUser,createUser}