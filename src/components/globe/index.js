import React, {
    useRef,
    useState,
    useCallback,
    useEffect
} from "react";
import styled from "styled-components";
import Globe from "react-globe.gl";

import { getCountries } from "../../cms"

const GlobeHolder = styled.h3`
  color: #fff;
`;

export const World = (size) => {
    const [countries, setCountries] = useState({ features: [] });
    const globeEl = useRef();
    const [locations, setLocations] = useState([]);
    const getLocations = getCountries();

    useEffect(() => {
        getLocations.then(loc => {
            setLocations(loc)
        })
    }, [])

    useEffect(() => {
        // load data
        fetch('/datasets/ne_110m_admin_0_countries.geojson').then(res => res.json()).then(setCountries);
    }, []);

    useEffect(() => {
        globeEl.current.controls().autoRotate = true;
        globeEl.current.controls().autoRotateSpeed = -1;

        const MAP_CENTER = { lat: 25, lng: 0, altitude: 1.8 };
        globeEl.current.pointOfView(MAP_CENTER, 0);
    }, [globeEl]);

    return (
        <GlobeHolder>
            <Globe
                ref={globeEl}
                backgroundColor="rgba(0,0,0,0)"
                globeImageUrl="/earth-dark.jpg"
                labelsData={locations}
                labelText={"label"}
                labelSize={1.2}
                labelDotOrientation={() => 'bottom'}
                labelRotation={-15}
                labelColor={useCallback(() => "white", [])}
                labelDotRadius={0}
                labelAltitude={0.001}
                hexPolygonsData={countries.features}
                hexPolygonResolution={3}
                hexPolygonMargin={0.3}
                hexPolygonColor={() => `#${Math.round(Math.random() * Math.pow(2, 24)).toString(16).padStart(6, '0')}`}
                //     hexPolygonLabel={({ properties: d }) => `
                //   <b>${d.ADMIN} (${d.ISO_A2})</b> <br />
                //   Population: <i>${d.POP_EST}</i>
                // `}
                pointsData={locations}
                pointAltitude="size"
                pointRadius="radius"
                pointColor="color"
                animateIn={true}
                width={size.width}
                height={size.height}
            />
        </GlobeHolder>
    );
};