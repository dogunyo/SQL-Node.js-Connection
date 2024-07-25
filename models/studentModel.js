const { DataTypes, STRING } = require("sequelize");
const { sequelize } = require("./indexStart");

module.exports=(sequelize,DataTypes)=>{
    const Student = sequelize.define("student",{
        student_id: {
            type: DataTypes.INTEGER,
            primaryKey :true,
            autoIncrement: true,
        },
        firstname:{
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname:{
            type : DataTypes.STRING,
            allowNull : false
        },
        gender:{
            type :DataTypes.STRING,
            allowNull : true

        },

        couser_id:{
            type :DataTypes.INTEGER,
            allowNull : true

        }


    });
    return Student;
}