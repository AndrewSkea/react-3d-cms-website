import React from 'react';
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
    MDBCarouselCaption,
} from 'mdb-react-ui-kit';

import "./carousel.styles.css";

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
                    src="/mywebsite.png"
                    link="https://github.com/AndrewSkea/my-website"
                    txt="Portfolio website using React, ThreeJS, React-Fiber, Strapi and Globe GL"
                />
                <CarouselItem
                    number="5"
                    title="IP Camera Monitor"
                    src="/ipcamera.jpg"
                    link="https://github.com/AndrewSkea/IPCamDisplay"
                    txt="A performant website to display simultaneous rtmp streams from ip cameras."
                />
                <CarouselItem
                    number="6"
                    title="IP Camera WiFi Controller"
                    src="/ipcontroller.jpg"
                    link="https://github.com/AndrewSkea/EzvizRemoteCameraController"
                    txt="Camera controller - arduino powered wifi controller for PTZ cameras."
                />
                <CarouselItem
                    number="7"
                    title="Trading Bot"
                    src="/tradingbot.png"
                    link="https://github.com/AndrewSkea/TradingBot"
                    txt="Trading Bot for users to combine market indicators to backtest strategies."
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