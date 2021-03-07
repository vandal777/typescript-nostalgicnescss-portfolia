import React from 'react';
import { Stat } from '../../Services/ManagerPokeApi/Controllers/Pokemon/types';

interface IProps {
    name?: string;
    imageSrc?: string;
    stats?: Stat[];
}

const PokemonDetail = ({ name, imageSrc, stats }: IProps) => {
    return (
        <div className="nes-container with-title is-centered">
            <h1>el pokemon es: {name}</h1>
            <img src={imageSrc} alt={''} />

            {stats?.map((stat) => (
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ width: 400, textAlign: 'left' }}>{stat.stat.name}:</div>
                    <progress className="nes-progress is-primary" value={stat.base_stat} max="100"></progress>
                </div>
            ))}
        </div>
    );
};

export default PokemonDetail;
