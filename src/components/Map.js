
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker
} from "react-simple-maps";
import React, {useEffect, useState} from "react";

const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";



const Map =(props) => {
    const [rows, setRows] = useState(props.data);

    useEffect(() => {
        setRows(props.data);

    }, [props.data])

    const markers = [
        {
            markerOffset: -30,
            name: "ISS ",
            coordinates: [rows.lng, rows.lat]
        },
    ];
    return (

        <ComposableMap projectionConfig={{ scale: 100 }}>
            <Geographies geography={geoUrl}>
                {({ geographies }) =>
                    geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} fill="green" />)
                }
            </Geographies>

            {markers.map(({ name, coordinates, markerOffset }) => (
                <Marker key={name} coordinates={coordinates}>
                    <g
                        fill="none"
                        stroke="#FF5533"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        transform="translate(-12, -24)"
                    >
                        <circle cx="12" cy="10" r="3" />
                        <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                    </g>
                    <text
                        textAnchor="middle"
                        y={markerOffset}
                        style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
                    >
                        {name}
                    </text>
                </Marker>
            ))}
        </ComposableMap>

    );
};

export default Map;