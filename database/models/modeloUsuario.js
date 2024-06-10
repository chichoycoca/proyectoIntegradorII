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
        underscored: true
    }
    const Usuario = sequelize.define(alias, cols, config);
return Usuario
}

