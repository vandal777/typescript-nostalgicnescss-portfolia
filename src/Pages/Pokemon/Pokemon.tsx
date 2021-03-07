import React, { useEffect, useState } from 'react';
import { $ManagerPokeApiClient } from '../../Services';
import { IPokemon } from '../../Services/ManagerPokeApi/Controllers/Pokemon/types';
import { useParams, useHistory } from 'react-router-dom';
import PokemonDetail from '../../Components/PokemonDetail/PokemonDetail';

const Pokemon = () => {
    const [pokemon, setPokemon] = useState<IPokemon>();
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        $ManagerPokeApiClient.Pokemon.GetPokemonByName(id)
            .then((data) => setPokemon(data))
            .catch((e) => {
                console.log(e);
            });
    }, [id]);

    const { name, sprites, stats } = { ...pokemon };

    return (
        <div style={{ margin: '100px 20px', display: 'flex', flexDirection: 'column' }}>
            <button className="nes-btn" onClick={() => history.push(`/pokemonlist`)} style={{ height: 50, width: 125, marginBottom: 20 }}>
                ATRÁS
            </button>
            <PokemonDetail name={name} imageSrc={sprites?.other?.['official-artwork'].front_default} stats={stats} />
        </div>
    );
};

export default Pokemon;
