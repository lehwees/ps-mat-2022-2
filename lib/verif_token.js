const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

    // Lê o token passado no cabeçalho da requisição
    const token = req.headers['x-access-token']

    // Se o token não existir, retorna HTTP 403: Forbidden
    if(! token) return res.status(403).send({
        auth:false,
        message: 'Nenhum token fornecido'
    })

    // Verifica se o token é valido e está dentro do prazo de validade
    jwt.verify(token, process.env.TOKEN_SECRET, (erro, decodificado) => {

        // Token inválido/expirado
        if(erro) return res.status(403).send({
            auth: false,
            message: 'Falha ao autenticar o token'
        })

        // O TOKEN ESTÁ OK!

        // Salva o id na request para uso posterior
        req.infoLogado = decodificado

        // Chama a proxima função de middleware
        next()
    })
}