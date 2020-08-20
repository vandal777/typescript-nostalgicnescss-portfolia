import React, { useEffect, useState } from 'react';
import { $ManagerPokeApiClient } from '../../Services';
import { IPokemon } from '../../Services/ManagerPokeApi/Controllers/Pokemon/types';
import { useParams } from 'react-router-dom';
import PokemonDetail from '../../Components/PokemonDetail/PokemonDetail';

const Pokemon = () => {
    const [pokemon, setPokemon] = useState<IPokemon>();
    const { id } = useParams();

    useEffect(() => {
        $ManagerPokeApiClient.Pokemon.GetPokemonByName(id)
            .then((data) => setPokemon(data))
            .catch((e) => {
                console.log(e);
            });
    }, [id]);

    const { name, sprites } = { ...pokemon };

    return (
        <div style={{ margin: '100px 200px 20px 200px' }}>
            <PokemonDetail name={name} imageSrc={sprites?.front_default} />
        </div>
    );
};

export default Pokemon;
