import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

console.log('Aplicação carregada! ')

const cadastrarUsuario = async (dados) => {
    const response = await fetch('/api/usuarios', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    return response.json()
}