import React, { useState, useEffect } from 'react';
import './PokemonList.css';
import { $ManagerPokeApiClient } from '../../Services';
import PokemonCard from '../../Components/PokemonCard/PokemonCard';
import { IPokemonList } from '../../Services/ManagerPokeApi/Controllers/Pokemon/types';

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState<IPokemonList>();

    useEffect(() => {
        $ManagerPokeApiClient.Pokemon.getPokemonList()
            .then((data: IPokemonList) => setPokemonList(data))
            .catch((e) => {
                console.log(e);
            });
    }, []);

    return (
        <div className="grid-container" style={{ marginTop: 100 }}>
            {pokemonList?.results.map((item) => (
                <PokemonCard pokemonSrc={item.name} />
            ))}
        </div>
    );
};

export default PokemonList;
