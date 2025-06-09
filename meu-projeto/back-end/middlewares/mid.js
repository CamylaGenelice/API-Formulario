const defaultErro = (res) => {
    return res.status(400).json({erro: "Preencha todos os campos! "})
}

export default {defaultErro}