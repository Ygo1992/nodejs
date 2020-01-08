const env = process.env.NODE_ENV || 'dev';
//'mongodb+srv://usuario_admin:nMFRT0Ee7dfpynoe@clusterapi-vyx1s.mongodb.net/test?retryWrites=true&w=majority';
const config = () => {
    switch(env) {
        case 'dev':
            return {
                bd_string: 'mongodb://localhost:27017/CursoNode',
                jwt_pass: 'PKtoken',
                jwt_expires: '7d'
            }
        case 'hml':
            return {
                bd_string: 'mongodb://localhost:27017/CursoNode',
                jwt_pass: 'PKtoken',
                jwt_expires: '7d'
            }
        case 'prod':
            return {
                bd_string: 'mongodb://localhost:27017/CursoNode',
                jwt_pass: 'PKtoken',
                jwt_expires: '7d'
            }
    }
}

console.log(`Iniciando a API em ambiente ${env.toUpperCase()}`);

module.exports = config();