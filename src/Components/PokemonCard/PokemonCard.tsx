import React, { useState, useEffect } from 'react';
import { IPokemon } from '../../Services/ManagerPokeApi/Controllers/Pokemon/types';
import { $ManagerPokeApiClient } from '../../Services';
import { useHistory } from 'react-router-dom';

const PokemonCard = ({ pokemonSrc, animated, shiny }) => {
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
            <img
                src={
                    animated
                        ? shiny
                            ? `https://raw.githubusercontent.com/tdmalone/pokecss-media/master/graphics/pokemon/ani-front-shiny/${name}.gif`
                            : `https://raw.githubusercontent.com/tdmalone/pokecss-media/master/graphics/pokemon/ani-front/${name}.gif`
                        : shiny
                        ? sprites?.front_shiny
                        : sprites?.front_default
                }
                alt={''}
            />
            <img
                src={
                    animated
                        ? shiny
                            ? `https://raw.githubusercontent.com/tdmalone/pokecss-media/master/graphics/pokemon/ani-back-shiny/${name}.gif`
                            : `https://raw.githubusercontent.com/tdmalone/pokecss-media/master/graphics/pokemon/ani-back/${name}.gif`
                        : shiny
                        ? sprites?.back_shiny
                        : sprites?.back_default
                }
                alt={''}
            />
        </div>
    );
};

export default PokemonCard;
