const { STRING } = require('sequelize');

const Fellow = conn.define('fellow', {
  name: {
    type: STRING,
    allowNull: false,
  },
});

module.exports = Fellow;
