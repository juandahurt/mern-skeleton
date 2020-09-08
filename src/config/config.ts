export const environments = {
    dev: process.env.DEVELOPMENT || 'dev',
    production: process.env.PRODUCTION || 'production'
}

export const config = {
    env: process.env.NODE_ENV || environments.dev,
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost'
};