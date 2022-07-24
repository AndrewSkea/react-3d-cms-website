import React from 'react';
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
    MDBCarouselCaption,
} from 'mdb-react-ui-kit';

import "./carousel.styles.css";

let slides = [
    <a href="https://github.com/Ayrergy/Ayrergy.git" rel="noreferrer" target="_blank" alt="1" >
        <img src="/ayrenergy.gif" alt="1" />
    </a>,
    <a href="https://github.com/AndrewSkea/GeneticAlgorithmTrading" rel="noreferrer" target="_blank" alt="2" >
        <img src="/dna.webp" alt="2" />
    </a>,
    <a href="https://github.com/AndrewSkea/Spotify-NFC-Jukebox" rel="noreferrer" target="_blank" alt="3" >
        <img src="/jukebox.jpg" alt="3" />
    </a>,
    <a href="https://github.com/AndrewSkea/IPCamDisplay" rel="noreferrer" target="_blank" alt="4" >
        <img src="/jukebox.jpg" alt="4" />
    </a>,
    <a href="https://github.com/AndrewSkea/EzvizRemoteCameraController" rel="noreferrer" target="_blank" alt="5" >
        <img src="/jukebox.jpg" alt="5" />
    </a>,
    <a href="https://github.com/AndrewSkea/my-website" rel="noreferrer" target="_blank" alt="6" >
        <img src="/jukebox.jpg" alt="6" />
    </a>,
    <a href="https://github.com/AndrewSkea/TradingBot" rel="noreferrer" target="_blank" alt="7" >
        <img src="/jukebox.jpg" alt="7" />
    </a>
];

function CarouselItem(options) {
    var act = options.number === "1" ? 'active' : '';
    return (
        <MDBCarouselItem className={act}>
            <p className="carousel-number">{options.number}</p>
            <a href={options.link} rel="noreferrer" target="_blank">
                <MDBCarouselElement src={options.src} alt={options.title} />
                <MDBCarouselCaption>
                    <h3 className="carousel-caption-title">{options.title}</h3>
                    <h5 className="carousel-caption-txt">{options.txt}</h5>
                </MDBCarouselCaption>
            </a>
        </MDBCarouselItem>
    );
}


export function Carousel() {
    return (
        <MDBCarousel showIndicators showControls fade>
            <MDBCarouselInner>
                <CarouselItem
                    number="1"
                    title="Ayrenergy.com"
                    src="/ayrenergy.gif"
                    link="https://github.com/Ayrenergy/AyrenergyMonitor"
                    txt="Live Wind Farm dashboard for current power and data history."
                />
                <CarouselItem
                    number="2"
                    title="Genetic Algorithm Trading Bot"
                    src="/dna.webp"
                    link="https://github.com/AndrewSkea/GeneticAlgorithmTrading"
                    txt="GA using financial indicators to make trading decisions."
                />
                <CarouselItem
                    number="3"
                    title="Spotify NFC Jukebox"
                    src="/jukebox.webp"
                    link="https://github.com/AndrewSkea/Spotify-NFC-Jukebox"
                    txt="Jukebox for elderly or people with Alzheimer's to visualise music and play on modern speaker systems."
                />
                <CarouselItem
                    number="4"
                    title="This website"
                    src="/jukebox.webp"
                    link="https://github.com/AndrewSkea/my-website"
                    txt="Portfolio website using React, ThreeJS, React-Fiber, Strapi and Globe GL"
                />
            </MDBCarouselInner>
        </MDBCarousel>
    );
}

export function Projects() {
    return (
        <div id="project-row" >
            <h1 id="carousel-section-title">Projects</h1>
            <div className="container inner-project-section">
                <div className="row carousel-section">
                    <Carousel />
                </div>
                <div className="row social-links">
                    <h1>
                        <a href="https://github.com/AndrewSkea" rel="noreferrer" target="_blank">
                            <i className="fa fa-github fa-lg" />
                        </a>
                        &nbsp;
                        &nbsp;
                        <a href="https://www.linkedin.com/in/andrew-skea-620972115/" rel="noreferrer" target="_blank">
                            <i className="fa fa-linkedin"></i>
                        </a>
                        <br />
                    </h1>
                    <h3>
                        Andrew Skea <i className="fa fa-copyright"></i>
                    </h3>
                </div>
            </div>
        </div>
    );
}