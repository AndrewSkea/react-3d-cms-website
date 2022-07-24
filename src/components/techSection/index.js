import React from "react";

import "./tech.styles.css";


function Technology(ins) {
    return (
        <div className="card tech-card">
            <img className="card-img-left tech-img" src={process.env.PUBLIC_URL + '/' + ins.type} alt="" />
            <div className="card-body tech-card-body">
                <h5 className="card-title tech-title">{ins.title}</h5>
                <p className="card-text">{ins.children}</p>
            </div>
        </div>
    )
}

export function Technologies() {
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
                    <Technology title="Python" type="python.webp">
                        My first love. Many of my projects are based in python ranging from APIs, to games, to machine learning and deep neural networks.
                        I have built a couple of python packages that people can plug into their apps and APIs that can be used to control cameras, stream music and plenty of others.
                    </Technology>
                    <Technology title="Websites" type="html.webp">
                        I've built a few websites in a variety of technologies, but the basics are always useful so I spend time making sure
                        my html and css work on all device sizes and play around with different css and js packages to help make beautiful content.
                        <br /> I've built websites with <strong>Django</strong>, <strong>Flask</strong>, <strong>React</strong> and&nbsp;
                        <strong>Angular</strong> as well as backends in <strong>python</strong>, <strong>Node</strong>,&nbsp;
                        <strong>Go</strong> and <strong>Java</strong>.
                    </Technology>
                    <Technology title="Docker and Kubernetes" type="docker.webp">
                        My websites and APIs are all hosted in docker containers, using docker compose and occasionally GitLab
                        CI/CD to deploy them. I have had some experience with <strong>Kubernetes</strong> and <strong>Helm</strong> as
                        well. Spent time optimising docker image sizes for faster deployments, what fun...
                    </Technology>
                    <Technology title="The Cloud" type="cloud.png">
                        I've used various parts of <strong>AWS</strong> and <strong>Google Cloud</strong> in both personal and preofessional circumstances.
                        Personally, I have limited use due to cost, but I explore as much as I can within their systems and take courses for AWS.
                        <br />All website traffic and security goes through <strong>Cloudflare</strong> which I have setup for multiple websites as well SSH tunnels to access
                        raspberry pis dotted around the world that I secure access to daily.
                    </Technology>
                    <Technology title="FinTech" type="finance.png">
                        Always been interested in the world of finance so I decided to build a backtesting suite to test a preset strategy on.
                        I've also applied some machine learing and trained neural networks and genetic algorithms to predict stock movements, both backtesting, and live.
                    </Technology>
                </div>
            </div>
        </div>
    );
}