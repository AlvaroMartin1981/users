//api: https://jsonplaceholder.typicode.com/users
//añadir edad aleatoria
//añadir imagenes https://thispersondoesnotexist.com/
//const contenedorUsuario =document.getElementById('contenedorUsuario')
const listaUsuarios = document.getElementById('listaUsuarios');
const endPoint = 'https://jsonplaceholder.typicode.com/users'





fetch('https://jsonplaceholder.typicode.com/users')
.then(function(respuesta) {
    if (!respuesta.ok) {
        throw new Error ('Error al cargar los usuarios');
    }
    return respuesta.json();
})
.then(function (usuarios){
    const usuariosEdades= usuarios.map(function (usuario){
        return {
            ...usuario,
            age: generarEdadAleatoria(18, 50),
            img: `${usuario.id}`
        };
    });
     usuariosEdades.forEach(function (usuario) {
        mostrarDetallesUsuario(usuario);
        console.log(usuario)
        
     });
    })
.catch((error)=> {
    console.log(error);
})
function generarEdadAleatoria(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function mostrarDetallesUsuario({ name, age, img, username, email}) {
    const infoUsauario =`
    <li class="usuario">
    <div class="usuarioDatos">
        <div class="usuario">
            <h3>Nombre:</h3> ${name}
            <h3>Edad:</h3> ${age}
            <h3>Username:</h3> ${username}
            <h3>Email:</h3> ${email}
        </div>
            <img src="../assets/img/${img}.jpeg" alt=""/>
    </div>
    </li>       
    `;
    listaUsuarios.innerHTML += infoUsauario;
}
