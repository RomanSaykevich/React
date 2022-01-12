import React, {useEffect, useState} from 'react';
import Flight from "../Flight/Flight";

const Flights = () => {
    const [flights, setflights] = useState([]);
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => {
                setflights(value.filter(flight => flight.launch_year !== '2020'))
            });
    }, [])
    return (
        <div>
            {
                flights.map(value => <Flight mission_name={value.mission_name}
                                             launch_year={value.launch_year}
                                             mission_patch_small={value.links.mission_patch_small}

                    />
                )
            }
        </div>
    );
};

export default Flights;