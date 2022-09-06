let contenido = document.querySelector('#contenido')
function traer(){
    fetch('https://randomuser.me/api')
        .then(res=>res.json())
        .then(data=>{
            console.log(data.results[0])//Imprime el valr email

            //Para imprimir valores por el html
            contenido.innerHTML = `
            <img src="${data.results[0].picture.medium}" width="100px" alt="">
            <p>Nombre: ${data.results[0].name.first}</p>            
            `
        })
}