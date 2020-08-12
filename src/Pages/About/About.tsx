import React from 'react';

const About = () => {
    return (
        <section id="about">
            <div className="row">
                <section className="message-list">
                    <section className="message -left">
                        <div
                            className="nes-balloon from-left"
                            style={{
                                marginLeft: 115,
                            }}
                        >
                            <p>
                                Mi nombre es Leonardo Badilla Soy un entusiasta de las nuevas tecnologías. Desarrollador de Software con más de 3 años
                                de experiencia. Capaz de crear aplicaciones escalables y altamente mantenibles. Involucrado en todo el flujo de
                                productos (análisis, diseño, desarrollo, pruebas).
                                <br />
                                Fui estudiante del grado de informática de la Universidad Politécnica de Barcelona y soy un apasionado de la
                                informática y los deportes.
                                <br />
                            </p>
                        </div>
                    </section>
                </section>
                <div className="three columns">
                    <i className="nes-bcrikko"></i>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className="nes-balloon from-right">
                        <p>
                            Durante mi tiempo libre me gusta dedicarme a formarme aprendiendo nuevos lenguajes de programación, practicando mis
                            deportes favoritos y también soy un apasionado de los E-Sports por lo tanto un gran jugador de juego en equipo.
                        </p>
                    </div>
                    <div className="three columns" style={{ alignSelf: 'flex-end', marginRight: '-172px' }}>
                        <i className="nes-bcrikko"></i>
                    </div>
                </div>
                <div className="nine columns main-col">
                    <div className="row">
                        <div className="columns contact-details" style={{ marginTop: '-100px' }}>
                            <h2>Datos de contacto</h2>
                            <p className="address">
                                <span>Leonardo Badilla</span>
                                <br />
                                <span>Rambla de la pau 87</span>
                                <br />
                                <span>
                                    {' '}
                                    Vilanova i la Geltru
                                    <br />
                                    Barcelona 08800 ES
                                </span>
                                <br />
                                <span>(0034) 666994034</span>
                                <br />
                                <span>leonardo.badilla2@gmail.com</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
