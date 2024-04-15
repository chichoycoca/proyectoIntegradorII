const db = {
    usuario:{
        email:'simonc@gmail.com',
        usuario: 'chichocahn',
        contrasena: 'simon123',
        fechaNacimiento: '02/05/2005',
        dni: '46649856',
        fotoPerfil: 'foto'
    },
    producto:[{        
            id: '1',
            imagen: 'foto',
            nombre: 'Inter dragon 2009',
            descripcion: 'Camiseta del inter de milan 09/10',
            id_cliente: '1',
            comentarios:[{
                id_comentario: '1',
                texto: 'Muy buena',
                id_comentador: '3',
            },
            {
                id_comentario: '2',
                texto: 'Que cara',
                id_comentador: '1',
            },
            {
                id_comentario: '3',
                texto: 'La quiero!!!',
                id_comentador: '2',
            }]
        }],  
}