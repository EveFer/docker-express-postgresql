const db = require('./src/lib/db')
const server = require('./src/server')

db.connect()
.then(() => {
    console.log('Connection has been established successfully.');
    server.listen(4000, () => {
        console.log('Server running')
    })
})
.catch((error) => {
    console.error('Unable to connect to the database:', error);
})