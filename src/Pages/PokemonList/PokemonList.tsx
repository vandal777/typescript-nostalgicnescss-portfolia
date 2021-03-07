import React, { useState, useEffect } from 'react';
import './PokemonList.css';
import { $ManagerPokeApiClient } from '../../Services';
import PokemonCard from '../../Components/PokemonCard/PokemonCard';
import { IPokemonList } from '../../Services/ManagerPokeApi/Controllers/Pokemon/types';

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState<IPokemonList>();
    const [filter, setFilter] = useState<string>('');
    const [animated, setAnimated] = useState<boolean>(false);
    const [shiny, setShiny] = useState<boolean>(false);

    useEffect(() => {
        $ManagerPokeApiClient.Pokemon.getFirstGeneration()
            .then((data: IPokemonList) => {
                setPokemonList(data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    return (
        <React.Fragment>
            <div style={{ marginTop: 90, width: '100%', display: 'flex', justifyContent: 'space-around' }}>
                <div style={{ width: '30%' }}></div>
                <div className="nes-field" style={{ width: '40%', margin: '0 auto' }}>
                    <label htmlFor="name_field">Pokemon filter</label>
                    <input type="text" id="name_field" className="nes-input" onChange={(e) => setFilter(e.target.value)}></input>
                </div>
                <div style={{ width: '30%', display: 'flex', justifyContent: 'flex-end', marginRight: 20, flexDirection: 'row' }}>
                    <div style={{ alignSelf: 'flex-end', marginRight: 10 }}>
                        <label>
                            <input type="checkbox" className="nes-checkbox" onChange={(e) => setAnimated(e.target.checked)} />
                            <span>ANIMATE</span>
                        </label>
                    </div>
                    <div style={{ alignSelf: 'flex-end' }}>
                        <label>
                            <input type="checkbox" className="nes-checkbox" onChange={(e) => setShiny(e.target.checked)} />
                            <span>SHINY</span>
                        </label>
                    </div>
                </div>
            </div>

            <div className="grid-container">
                {pokemonList?.results.map(
                    (item) => item.name.includes(filter) && <PokemonCard animated={animated} shiny={shiny} pokemonSrc={item.name} />
                )}
            </div>
        </React.Fragment>
    );
};

export default PokemonList;
