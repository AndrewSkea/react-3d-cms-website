import React, { useState, useEffect } from "react";

import { getTechnologies } from "../../cms"
import "./tech.styles.css";


function Technology(ins) {
    const tech = ins.tech;
    return (
        <div className="card tech-card">
            <img className="card-img-left tech-img" src={tech.techLogo.fields.file.url} alt="" />
            <div className="card-body tech-card-body">
                <h5 className="card-title tech-title">{tech.title}</h5>
                <p className="card-text">{tech.description}</p>
            </div>
        </div>
    )
}

export function Technologies() {
    const [technologies, setTechnologies] = useState([]);
    const getTechs = getTechnologies();

    useEffect(() => {
        getTechs.then(technologies => {
            setTechnologies(technologies)
        })
    }, [])
    return (
        <div id="tech-row" >
            <div className="container inner-tech-section">
                <div className="row">
                    <div className="col-6">
                        <h1 id="tech-section-title">Technologies&nbsp;&nbsp;</h1>
                    </div>
                    <div className="col-6">
                        <h3 id="title-icon">
                            <a href="https://github.com/AndrewSkea" rel="noreferrer" target="_blank">
                                My Git&nbsp;
                                <i className="fa fa-github fa-lg" />
                            </a>
                        </h3>
                    </div>
                </div>

                <div className="row card-deck">
                    {technologies.map((tech, index) => (
                        <Technology key={index} tech={tech} />
                    ))}
                </div>
            </div>
        </div>
    );
}