const { Sequelize } = require('sequelize');


module.exports = new Sequelize('CEI','postgres','db&new20Pst',{
  host:'64.225.23.236',
  dialect: 'postgres',
  operatorsAliases:false,
  pool:{
      max:5,
      min:0,
      acquire:30000,
      idle:10000
  }
})

