// src/components/CrochetTable.js
import React from 'react';
import './CrochetTable.css';


const CrochetTable = ({ puntos }) => {

    return (
        <>
            <table className="crochet-table">
                <thead>
                    <tr>
                     <th>Simbolo</th>
                        <th>Nombre en Inglés</th>
                        <th>Abreviatura</th>
                        <th>Nombre en Español</th>
                        <th> Tutorial <span className="bandera" style={{ fontSize: '1.5em',display: 'block' }}>🇬🇧</span></th>
                        <th> Tutorial <span className="bandera" style={{ fontSize: '1.5em',display: 'block' }}>🇲🇽</span></th>
                    </tr>
                </thead>
                <tbody>
                    {puntos.map((punto, index) => (
                        <tr key={index} style={{ cursor: 'pointer' }}>
                            <td>{
                                (index+1)<50 &&
                                <img
                                    src={`/images/${index+1}.png`}
                                    alt={punto.nombreEspanol}
                                    className="crochet-image"
                                    loading="lazy"
                                />
                                }
                            </td>
                            <td>{punto.nombreIngles}</td>
                            <td>{punto.abreviatura}</td>
                            <td>{punto.nombreEspanol}</td>
                            <td>
                                {
                                    <a
                                        href={`https://www.youtube.com/results?search_query=${encodeURIComponent(punto.nombreIngles + ' crochet')}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <i className="fa fa-search" aria-hidden="true"></i> Videos
                                    </a>
                                }
                            </td>
                            <td>
                                {
                                    <a
                                        href={`https://www.youtube.com/results?search_query=${encodeURIComponent(punto.nombreEspanol + ' crochet')}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <i className="fa fa-search" aria-hidden="true"></i> Videos
                                    </a>
                                }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default CrochetTable;
