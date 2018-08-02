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

    searchPokemonData();
})

/*Funcion para ingresar a los pokemones */
function searchPokemonData (pokemon) {
    $.ajax({
        url: 'https://pokeapi.co/api/v2/pokemon/' + `${namePokemon}`,
        type:'GET',
        datatype:'json',
    })
    .done(function(response){
        const getData = (response);
        console.log(response);
        dataPokemon();
    })
    .fail(function(){
        console.log("error");
    })
};

    function dataPokemon (data){
    console.log('entro-function');
}




