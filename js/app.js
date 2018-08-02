const getPokemon = $("#poke-input");
const searchPokemon = $("#submit-btn");
const putPokemon = $("#pokemon-real");
let valuePokemon;


/*Función que extrae el valor de ingreso del Input*/
searchPokemon.click( function (e){
    e.preventDefault();
    putPokemon.innerHTML="";
    valuePokemon = getPokemon.val();
})
