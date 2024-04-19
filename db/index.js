const db = {
    usuario:{
        1: {
        id: '1',
        email:'simocahn@gmail.com',
        usuario: 'chichocahn',
        contrasena: 'simon',
        fechaNacimiento: '2020-05-02',
        dni: '46649856',
        fotoPerfil: '/images/fotografo-retrato-corporativo-linkedin-7.jpg'
        },
        2: {
        id: '2',
        email:'matiasvb@gmail.com',
        usuario: 'mativb',
        contrasena: 'matias',
        fechaNacimiento: '02/05/2005',
        dni: '46649857',
        fotoPerfil: '/images/fotos-para-perfil-de-linkedin-hombre.webp'
        },
        3: {
        id: '3',
        email:'bautip@gmail.com',
        usuario: 'bautipele',
        contrasena: 'bauti',
        fechaNacimiento: '02/05/2005',
        dni: '46649858',
        fotoPerfil: '/images/'
        },
        4: {
        id: '4',
        email:'tomyc@gmail.com',
        usuario: 'tomycas',
        contrasena: 'tomi',
        fechaNacimiento: '02/05/2005',
        dni: '46649859',
        fotoPerfil: 'foto'
        },
        5: {
        id: '5',
        email:'juanf@gmail.com',
        usuario: 'juanf',
        contrasena: 'juan',
        fechaNacimiento: '02/05/2005',
        dni: '46649860',
        fotoPerfil: 'foto'
        },
    },



    producto:[{        
            id: '1',
            imagen: '../public/images/products/inter-dragon.jpg',
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
        },
        {        
            id: '2',
            imagen: '../public/images/products/arsenal.jpg',
            nombre: 'Arsenal 2005',
            descripcion: 'Camiseta Del Arsenal 05/06',
            id_cliente: '2',
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
        },
        {        
            id: '3',
            imagen: '../public/images/products/barca.jpg',
            nombre: 'Barca 2024',
            descripcion: 'Camiseta Del Barcelona 23/24',
            id_cliente: '3',
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
        },
        {        
            id: '4',
            imagen: '../public/images/products/rm.jpg',
            nombre: 'Real Madrid 2017',
            descripcion: 'Camiseta Del Real Madrid 17/18',
            id_cliente: '4',
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
        },
        {        
            id: '5',
            imagen: '../public/images/products/man-city.jpg',
            nombre: 'Man City 2024',
            descripcion: 'Camiseta Del Manchester City 23/24',
            id_cliente: '5',
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
        },
        {        
            id: '6',
            imagen: '../public/images/products/man-utd.jpg',
            nombre: 'Man Utd 2024',
            descripcion: 'Camiseta Del Manchester United 23/24',
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
        },
        {        
            id: '7',
            imagen: '../public/images/products/roma.jpg',
            nombre: 'Roma 2024',
            descripcion: 'Camiseta De la Roma 23/24',
            id_cliente: '2',
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
        },
        {        
            id: '8',
            imagen: '../public/images/products/casla.jpg',
            nombre: 'San Lorenzo 2021',
            descripcion: 'Camiseta De San Lorenzo De Almagro 21/22',
            id_cliente: '3',
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
        },
        {        
            id: '9',
            imagen: '../public/images/products/bayern.jpg',
            nombre: 'Bayer Munich 2010',
            descripcion: 'Camiseta Del Bayer Munich 10/11',
            id_cliente: '4',
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
        },
        {        
            id: '10',
            imagen: '../public/images/products/milan.jpg',
            nombre: 'Milan 2006',
            descripcion: 'Camiseta Del Milan 06/07',
            id_cliente: '5',
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
        }]
}