const { Sequelize } = require('sequelize');


module.exports = new Sequelize('CEI','postgres','cei#newroot20',{
  host:'142.93.24.32',
  dialect: 'postgres',
  operatorsAliases:false,
  pool:{
      max:5,
      min:0,
      acquire:30000,
      idle:10000
  }
})

