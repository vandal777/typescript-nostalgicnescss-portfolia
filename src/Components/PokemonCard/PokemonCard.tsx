import React, { useState, useEffect } from 'react';
import { IPokemon } from '../../Services/ManagerPokeApi/Controllers/Pokemon/types';
import { $ManagerPokeApiClient } from '../../Services';
import { useHistory } from 'react-router-dom';

const PokemonCard = ({ pokemonSrc }) => {
    const [pokemon, setPokemon] = useState<IPokemon>();
    const history = useHistory();

    useEffect(() => {
        $ManagerPokeApiClient.Pokemon.GetPokemonByName(pokemonSrc)
            .then((data) => setPokemon(data))
            .catch((e) => {
                console.log(e);
            });
    }, [pokemonSrc]);

    const { name, sprites } = { ...pokemon };

    return (
        <div className="nes-container with-title is-centered" onClick={() => history.push(`/Pokemon/${name}`)}>
            <h1>el pokemon es: {name}</h1>
            <img src={sprites?.front_default} alt={''} />
        </div>
    );
};

export default PokemonCard;
