const elList = document.querySelector('.pokemon-list');



function renderPokemons(pokemonsArr) {
    pokemonsArr.forEach(pokemon => {

        // ---------------------creating elements--------------------

        const newLi = document.createElement('Li');
        const newImg = document.createElement('Img')
        const newName = document.createElement('h3');
        const newNumber = document.createElement('p');
        const newInfo = document.createElement('p');
        const newType = document.createElement('p');

        // ---------------------setting atributes--------------------

        newLi.setAttribute('class', 'pokemon-list-item p-5 bg-light mb-3');
        newImg.setAttribute('class', 'pokemon-img text-center');
        newImg.setAttribute('src', pokemon.img);
        newImg.setAttribute('alt', pokemon.name);
        newImg.setAttribute('width', 150);
        newImg.setAttribute('height', 200);
        newName.setAttribute('class', 'pokemon-name');
        newNumber.setAttribute('class', 'pokemon-number');
        newInfo.setAttribute('class', 'pokemon-info');
        newType.setAttribute('class', 'pokemon-type');


        // ---------------------Assigning values--------------------
        newName.textContent = "Name: " + pokemon.name;
        newNumber.textContent = "Num: " + pokemon.num;
        newInfo.textContent = "Weight: " + pokemon.weight + "     " + "Height: " + pokemon.height;
        newType.textContent = "Type: " + pokemon.type;


        newLi.appendChild(newImg);
        newLi.appendChild(newName);
        newLi.appendChild(newNumber);
        newLi.appendChild(newInfo);
        newLi.appendChild(newType);
        elList.appendChild(newLi);
    });
}
renderPokemons(pokemons);