if (process.env.NODE_ENV == 'production') {
    module.exports = {
        mongoURI: 'mongodb+srv://HabibuRahman:<habibviqar123>@vidjp.ajcklxe.mongodb.net/'
    }
} else {
    module.exports = { mongoURI: 'mongodb://127.0.0.1/vidjot-dev' }
}