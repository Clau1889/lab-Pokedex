const getPokemon = $("#poke-input");
const searchPokemon = $("#submit-btn");
const putPokemon = $("#pokemon-real");
let namePokemon;


/*Función que extrae el valor de ingreso del Input*/
searchPokemon.click( function (e){
    e.preventDefault();
    putPokemon.innerHTML="";
    namePokemon = getPokemon.val();
    console.log(namePokemon);

    realPokemon();
})

const realPokemon= function (pokemon) {
    $.ajax({
        url: 'https://pokeapi.co/api/v2/pokemon/',
        type:'GET',
        datatype:'json',
        data:{
        name: `${namePokemon}`,   
        }
    })
    .done(function(response){
        console.log(response);

    })
    .fail(function(){
        console.log("error");
    })
};


