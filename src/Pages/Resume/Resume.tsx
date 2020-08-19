import React from 'react';
import ResumeItem from '../../Components/ResumeItem/ResumeItem';
import { WORK_INFO } from './const';

const Resume = () => {
    return (
        <section id="resume">
            {/* Work
    ----------------------------------------------- */}
            <div className="row work">
                <div className="three columns header-col">
                    <h1>
                        <span>Experiencia laboral</span>
                    </h1>
                </div>
                <div className="nine columns main-col">
                    {WORK_INFO.map((item) => (
                        <ResumeItem name={item.name} jobPosition={item.jobPosition} period={item.period} project={item.project} url={item.url} />
                    ))}
                </div>
                {/* main-col end */}
            </div>{' '}
            {/* End Work */}
            <div className="row education">
                <div className="three columns header-col">
                    <h1>
                        <span>Formación acaémica</span>
                    </h1>
                </div>
                <div className="nine columns main-col">
                    <div className="row item" style={{ padding: '0px 0px 40px 0px' }}>
                        <div className="twelve columns">
                            <h3>
                                <a target="_blank" rel="noopener noreferrer" href={'https://www.upc.edu'}>
                                    Grado de ingenieria informatica
                                </a>
                            </h3>
                            <p className="info">
                                Universitat Politécnica de Catalunya
                                <br />
                                <span>•</span>
                                <em className="date">Septiembre 2014 — Junio 2018</em>
                            </p>
                            <div style={{ display: 'flex', justifyContent: 'start', width: 250 }}>
                                <i className="nes-icon trophy is-large"></i>
                                <i className="nes-icon trophy is-large"></i>
                                <i className="nes-icon trophy is-large"></i>
                            </div>
                        </div>
                    </div>
                    <div className="row item" style={{ padding: '0px 0px 40px 0px' }}>
                        <div className="twelve columns">
                            <h3>
                                <a target="_blank" rel="noopener noreferrer" href={'https://www.upc.edu'}>
                                    CFGS DAW(Diseño Aplicaciones Informáticas)
                                </a>
                            </h3>
                            <p className="info">
                                IES Joaquim Mir
                                <br />
                                <span>•</span>
                                <em className="date">Septiembre 2012 — Junio 2014</em>
                            </p>
                            <div style={{ display: 'flex', justifyContent: 'start', width: 250 }}>
                                <i className="nes-icon trophy is-large"></i>
                                <i className="nes-icon trophy is-large"></i>
                            </div>
                        </div>
                    </div>
                    <div className="row item" style={{ padding: '0px 0px 40px 0px' }}>
                        <div className="twelve columns">
                            <h3>
                                <a target="_blank" rel="noopener noreferrer" href={'https://www.upc.edu'}>
                                    CFGM ESI(Explotación Sistemas Informáticos){' '}
                                </a>
                            </h3>
                            <p className="info">
                                IES Joaquim Mir
                                <br />
                                <span>•</span>
                                <em className="date">Septiembre 2010 — Junio 2012</em>
                            </p>
                            <div style={{ display: 'flex', justifyContent: 'start', width: 250 }}>
                                <i className="nes-icon trophy is-large"></i>
                            </div>
                        </div>
                    </div>
                    <div className="row item" style={{ padding: '0px 0px 40px 0px' }}>
                        <div className="twelve columns">
                            <h3>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.udemy.com/react-js-redux-es6-completo-de-0-a-experto-espanol/"
                                >
                                    React JS + Redux + ES6. Completo ¡De 0 a experto!
                                </a>
                            </h3>
                            <p className="info">
                                Curso de udemy.com <span>•</span> <em className="date">2018</em>
                            </p>
                            <p>Curso de programación con ReactJS con Redux y ES6 en el cual desarrolle mi primera aplicación con ReactJS </p>
                        </div>
                    </div>{' '}
                    {/* item end */}
                    <div className="row item" style={{ padding: '0px 0px 40px 0px' }}>
                        <div className="twelve columns">
                            <h3>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.udemy.com/desarrollo-movil-con-react-native-expo-y-firebase/"
                                >
                                    Desarrollo móvil con React Native, Expo y Firebase
                                </a>
                            </h3>
                            <p className="info">
                                Curso de udemy.com <span>•</span> <em className="date">2018</em>
                            </p>
                            <p>
                                Curso de programación con React Native con un Backend utilizando firebase y genymotion para simulación de dispositivos
                                conectado a expo para poder debugar la aplicación{' '}
                            </p>
                        </div>
                    </div>{' '}
                    {/* item end */}
                </div>{' '}
                {/* main-col end */}
            </div>{' '}
            {/* End Education */}
            {/* Skills
    ----------------------------------------------- */}
            <div className="row skill">
                <div className="three columns header-col">
                    <h1>
                        <span>Skills</span>
                    </h1>
                </div>
                <div className="nine columns main-col">
                    <p>
                        Aqui hay un resumen del porcentaje de conocimento que creo que he podido adquirir de cada tecnologia durante todo el tiempo
                        que llevo trabajando con ellas. Actualmente se puede ver que mi maxima experiencia es con React y Redux, aunque tambien me
                        gusta mucho la programación MOBILE por lo que tambien tengo experiencia en React Native.
                    </p>
                    <div className="bars">
                        <ul className="skills">
                            <li>
                                <span className="bar-expand reactjs" />
                                <em>ReactJS</em>
                            </li>
                            <li>
                                <span className="bar-expand redux" />
                                <em>Redux</em>
                            </li>
                            <li>
                                <span className="bar-expand postcss" />
                                <em>PostCSS</em>
                            </li>
                            <li>
                                <span className="bar-expand webpack" />
                                <em>WebPack3</em>
                            </li>
                            <li>
                                <span className="bar-expand javascript" />
                                <em>JavaScript</em>
                            </li>
                            <li>
                                <span className="bar-expand typescript" />
                                <em>TypeScript</em>
                            </li>
                            <li>
                                <span className="bar-expand nodejs" />
                                <em>NodeJS</em>
                            </li>
                            <li>
                                <span className="bar-expand php" />
                                <em>PHP</em>
                            </li>
                            <li>
                                <span className="bar-expand mysql" />
                                <em>MySQL</em>
                            </li>
                            <li>
                                <span className="bar-expand reactnative" />
                                <em>React Native</em>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
