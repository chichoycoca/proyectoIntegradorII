module.exports = function(sequelize, dataTypes){
    let alias = "Usuario"
    let cols = {
        id:{
            autoincrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        email:{
            type: dataTypes.STRING
        },
        usuario:{
            type: dataTypes.STRING
        },
        contrasena:{
            type: dataTypes.STRING
        },
        fecha:{
            type: dataTypes.DATE
        },
        dni:{
            type: dataTypes.INTEGER
        },
        fotodeperfil:{
            type: dataTypes.STRING
        }
         
    }
    let config = {
        tableName: "usuarios",
        timestamps: true,
        underscored: false,
    }
    const Usuario = sequelize.define(alias, cols, config);


   /* Usuario.associate = function (models) {
        Usuario.hasMany(models.Producto, {
            as: 'productos',
            foreignKey: 'id_user'
        });
        Usuario.hasMany(models.Comentario, {
            as: 'comentarios',
            foreignKey: 'id_user'
        });  */


return Usuario
}//}

