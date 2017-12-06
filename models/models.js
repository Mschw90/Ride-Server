"use strict";

var Sequelize = require('sequelize');
var sequelize = new Sequelize(process.env.DATABASE_URI);

sequelize
.authenticate()
.then(() => {
    console.log('Connection to your database has been established successfully.');
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
});

var User = sequelize.define( 'users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:  true
    },   
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type    : Sequelize.TEXT,
        isUnique :true,
        allowNull:false,
        validate:{
            isEmail : true
        }
    }
})

module.exports = {
    sequelize,
    User
};