const Sequelize = require('sequelize');
const { STRING } = require('sequelize');
const con = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/fellows');



const Fellow = con.define('fellow', {
    name: {
      type: STRING,
      allowNull: false,
    },
  });


const syncAndSeed = async () => {
    await con.sync( { force: true } );
    const [ moe, larry, curly, shemp ] = await Promise.all( [ 
        Fellow.create( { name : 'moe'} ),
        Fellow.create( { name : 'larry' } ),
        Fellow.create( { name : 'curly' } ),
        Fellow.create( { name : 'shemp' } )
     ] )
};

module.exports = { syncAndSeed, Fellow };