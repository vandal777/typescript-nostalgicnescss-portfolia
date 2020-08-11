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
                    <h3>
                        Soy un <span>Frontend developer</span> de Barcelona capaz de crear todo tipo de WebApp's utilizando <span>Javascript</span>.
                        Navega por el Site clicando en el Header y conoce mas {/*<NavLink to="/about">Sobre mi</NavLink>*/}.
                    </h3>
                    <hr />
                    <ul className="social">
                        <li>
                            <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/vandaLbd">
                                <i className="fa fa-twitter" />
                            </a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/leonardo-badilla">
                                <i className="fa fa-linkedin" />
                            </a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" target="_blank" href="https://github.com/vandal777">
                                <i className="fa fa-github" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Home;
