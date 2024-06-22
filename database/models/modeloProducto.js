module.exports = function(sequelize, dataTypes){
    let alias = "Producto"
    let cols = {
        id:{
            autoincrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        imagen_producto:{
            type: dataTypes.STRING
        },
        producto:{
            type: dataTypes.STRING
        },
        descripcion:{
            type: dataTypes.STRING
        },
        cliente_id:{
            type: dataTypes.INTEGER
        }
         
    }
    let config = {
        tableName: "productos",
        timestamps: true,
        underscored: false
    }
    const Producto = sequelize.define(alias, cols, config);

  /*  Producto.associate = function(models){

        Producto.belongsTo(models.Usuario, {
        as : 'usuario',
        foreignKey : 'id_user'
        })
        Producto.hasMany(models.Comentario, {
            as: 'comentarios',
            foreignKey: 'cliente_id'
        });*/

return Producto


}//}

