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
        underscored: true
    }
}