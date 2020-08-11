import React from 'react';

const Home = () => {
    return (
        <header id="home">
            <div className="row banner">
                <div className="banner-text">
                    <h1 className="responsive-headline">
                        <p>Bienvenido a mi portfolio</p>
                        <p>Soy Leonardo Badilla.</p>
                    </h1>
                    <div className="nes-container is-rounded is-dark">
                        <p>
                            Soy un <span>Frontend developer</span> de Barcelona capaz de crear todo tipo de WebApp's utilizando
                            <span>Javascript</span>.<br /> Navega por el Site clicando en el Header y conoce mas.
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
