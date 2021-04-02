const { Sequelize, Model, DataTypes, FLOAT } = require('sequelize');
const sequelize = require('../database');

const Transaction = sequelize.define("money_transaction", {
    concept: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
      type: DataTypes.  STRING,
      allowNull: false,
      defaultValue: 'icome'
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
      },
  });
  
  (async () => {
    await sequelize.sync();
  })();


module.exports = Transaction;