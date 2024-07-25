const dbConfig = require('../config/dbConfig')
const {Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize (
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,{

        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false
    }
    
)
sequelize.authenticate()
.then(()=>{
    console.log('database connection successful...');
})

.catch(err => {
    console.log('Error'+ err)
})

const db ={}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.students = require('./studentModel.js')(sequelize, DataTypes)
db.courses = require('./courseModels.js')(sequelize, DataTypes)


db.sequelize.sync({force: false})
.then(()=>{
    console.log('re-sync done')
})
db.students.belongsTo(db.courses, {foreignKey: "couser_id"});
module.exports = db