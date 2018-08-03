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
    /*Función que regresa  */
    .done(function(response){
        const getData = (response);
        console.log(response);
        dataPokemon(getData);
    })
    .fail(function(){
        console.log("error");
    })
};

/*Función para meterme al Objeto de cada Pokémon y buscar propiedad */
function dataPokemon (dataPokemon){

    let img= dataPokemon.sprites.front_default;
    let name= dataPokemon.name;
    let weight= dataPokemon.weight;
    let abilitiesPok= dataPokemon.abilities;

    /*Ingresar a las habilidades de cada Pokémon */
    for (var i=0; i<abilitiesPok.length; i++){
        let showAbilities= [];
        let totalAbilities= abilitiesPok[i].ability.name; 

        showAbilities += totalAbilities;
        console.log(showAbilities);
    }


    let infoBox= $("#container-data-pokemon");
    let imgPokemon= document.createElement("img");
    imgPokemon.append(img);
    infoBox.append(imgPokemon);
};




