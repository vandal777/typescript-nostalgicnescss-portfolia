import React from 'react';

const Home = () => {
    return (
        <header id="home">
            <div className="row banner">
                <div className="banner-text">
                    <h1 className="responsive-headline" style={{ textTransform: 'uppercase' }}>
                        <p>bienvenido a mi portfolio</p>
                        <p>soy leonardo badilla</p>
                    </h1>
                    <div className="nes-container is-rounded is-dark">
                        <p style={{ textTransform: 'uppercase' }}>
                            un <span>frontend developer</span> de barcelona, capaz de crear todo tipo de webapp's utilizando
                            <span> javascript</span>.<br /> navega por el site clicando en el header y conoce más
                        </p>
                    </div>
                    <hr />
                    <ul className="social">
                        <li>
                            <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/vandaLbd">
                                <i className="nes-icon twitter is-large" />
                            </a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/leonardo-badilla">
                                <i className="nes-icon linkedin is-large" />
                            </a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" target="_blank" href="https://github.com/vandal777">
                                <i className="nes-icon github is-large" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Home;
