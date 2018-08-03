const getPokemon = $("#poke-input");
const searchPokemon = $("#submit-btn");
const putPokemon = $("#pokemon-real");
let namePokemon;

$(document).ready(function () {
    pokemons();
    /*Función que extrae el valor de ingreso del Input*/
    searchPokemon.click(function (e) {
        e.preventDefault();
        $("#pokemon-real").empty();
        namePokemon = getPokemon.val();

        searchPokemonData(namePokemon);
    })

    /*---FUNCION AJAX PARA TODOS LOS POKEMONES---*/
    function pokemons() {
        $.ajax({
          url: 'https://pokeapi.co/api/v2/pokemon/',
          type: 'GET',
          datatype: 'json',
        })
          .done(function (response) {
            const getDataAllPokemons = (response);
            getPokemons(getDataAllPokemons);
          })
          .fail(function () {
            console.log("Error");
          })
      }

    function getPokemons(dataAllPokemons){
        let arrayPokemons= [];
        let searchAllPokemons= dataAllPokemons.results;

        for (var j=0; j<searchAllPokemons.length; j++){
            let allPokemons= searchAllPokemons[j];
            let namePokemons= allPokemons.name;

            searchPokemonData(namePokemons);
            
        }
    }


    /*Funcion para ingresar para cada Pokémon */
    function searchPokemonData(namePokemon) {
        $.ajax({
            url: 'https://pokeapi.co/api/v2/pokemon/' + `${namePokemon}`,
            type: 'GET',
            datatype: 'json',
        })
            /*Función que regresa  */
            .done(function (response) {
                const getData = (response);
                //console.log(response);
                dataPokemon(getData);
            })
            .fail(function () {
                console.log("Nombre de Pokémon incorrecto");
            })
    };

    /*Función para meterme al Objeto de cada Pokémon y buscar propiedad */
    function dataPokemon(dataPokemon) {
        let img = dataPokemon.sprites.front_shiny;
        let name = dataPokemon.name;
        let weight = dataPokemon.weight;
        let abilitiesPok = dataPokemon.abilities;

        /*Ingresar a las habilidades de cada Pokémon*/
        let showAbilities = [];
        for (var i = 0; i < abilitiesPok.length; i++) {
            let totalAbilities = abilitiesPok[i].ability.name;

            showAbilities += totalAbilities + ",";
        };

        /*USO DOM para asignar valores al pokémon seleccionado*/
        let infoBox = $("#container-data-pokemon");
        let pokemon = $("#pokemon-real");
        let imgPokemon = document.createElement("img");
        imgPokemon.src = img;
        pokemon.append(imgPokemon);
        infoBox.append(pokemon);
        let textName = document.createElement('li');
        textName.innerText = 'Name: ' + name;
        pokemon.append(textName);
        let textWeight = document.createElement('li');
        textWeight.innerText = 'Weight: ' + weight;
        pokemon.append(textWeight);
        let textAbilities = document.createElement('li');
        textAbilities.innerText = 'Abilities: ' + showAbilities;
        pokemon.append(textAbilities);

    };

});


