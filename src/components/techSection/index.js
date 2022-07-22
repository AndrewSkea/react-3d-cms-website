import React from "react";


function Technology(ins) {
    console.log(ins);
    return (
        <div className="card">
            <img className="card-img-left tech-img" src={process.env.PUBLIC_URL + '/' + ins.type} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{ins.title}</h5>
                <p className="card-text">{ins.children}</p>
            </div>
        </div>
    )
}

export function Technologies() {
    return (
        <div id="secondRow" >
            <div className="container innerTech">
                <h1 id="techTitle">Technologies</h1>
                <Technology title="Python" type="python.webp">
                    My first love. Many of my projects are based in python ranging from APIs, to games, to machine learning and deep neural networks.
                    I have built a couple of python packages that people can plug into their apps and APIs that can be used to control cameras, stream music and plenty of others.
                </Technology>
                <Technology title="HTML and CSS" type="html.webp">
                    My first love. Many of my projects are based in python ranging from APIs, to games, to machine learning and deep neural networks.
                    I have built a couple of python packages that people can plug into their apps and APIs that can be used to control cameras, stream music and plenty of others.
                </Technology>
            </div>
        </div>
    );
}