module.exports = function(sequelize, dataTypes){
    let alias = "Comentario" 
    let cols = {
        id:{
            autoincrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        comentario:{
            type: dataTypes.STRING
        },
        id_post:{
            type: dataTypes.INTEGER
        },
        id_user:{
            type: dataTypes.INTEGER
        }
    }
    let config = {
        tableName: "comentarios",
        timestamps: true,
        underscored: true
    }
}