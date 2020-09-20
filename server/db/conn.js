const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/fellows');
const Fellow = require('./fellows')

const syncAndSeed = async () => {
    await conn.sync( { force: true } );
    const [ moe, larry, curly, Shemp ] = await Promise.all( [ 
        Fellow.create( { name : Moe } ),
        Fellow.create( { name : Larry } ),
        Fellow.create( { name : Curly } ),
        Fellow.create( { name : Shemp } )
     ] )
};

module.exports = { syncAndSeed };