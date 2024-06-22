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
        underscored: false
    }
    const Comentario = sequelize.define(alias, cols , config);

  /*  Comentario.associate = function(models) {
        Comentario.belongsTo(models.Producto, {
            as: 'productos',
            foreignKey: 'cliente_id'
        });
        Comentario.belongsTo(models.Usuario, {
            as: 'usuario',
            foreignKey: 'id_user'
        }); */


    return Comentario
}//}

