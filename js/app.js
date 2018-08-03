const getPokemon = $("#poke-input");
const searchPokemon = $("#submit-btn");
const putPokemon = $("#pokemon-real");
let namePokemon;

$(document).ready(function () {
    /*Función que extrae el valor de ingreso del Input*/
    searchPokemon.click(function (e) {
        e.preventDefault();
        $("#pokemon-real").empty();
        namePokemon = getPokemon.val();
        console.log(namePokemon);

        searchPokemonData();
    })

    /*Funcion para ingresar a los pokemones */
    function searchPokemonData(pokemon) {
        $.ajax({
            url: 'https://pokeapi.co/api/v2/pokemon/' + `${namePokemon}`,
            type: 'GET',
            datatype: 'json',
        })
            /*Función que regresa  */
            .done(function (response) {
                const getData = (response);
                console.log(response);
                dataPokemon(getData);
            })
            .fail(function () {
                console.log("error");
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


