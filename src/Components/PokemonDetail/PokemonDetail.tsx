import React from 'react';

const PokemonDetail = ({ name, imageSrc }) => {
    return (
        <div className="nes-container with-title is-centered">
            <h1>el pokemon es: {name}</h1>
            <img src={imageSrc} alt={''} />
        </div>
    );
};

export default PokemonDetail;
