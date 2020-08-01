const _CONFIG = {
    dbUrl: process.env.DB_URL || 'mongodb+srv://perfiles:perfiles@cluster0-hbilv.gcp.mongodb.net/perfiles?retryWrites=true&w=majority',
    port: process.env.PORT || 5000,
    host: process.env.HOST || 'http://localhost',    
}

module.exports = _CONFIG