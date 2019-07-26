import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import LocationCard from './LocationCard.js';

export default function LocationsList() {
    const [location, setLocation] = useState([])

    useEffect((props) => {
       
        Axios
            .get(`https://rickandmortyapi.com/api/location/`)
            .then(res => {
                const infoLocation = res.data.results;
                setLocation(res.data.results);
                console.log("location Info", infoLocation)
            })
            .catch(error => {
                console.log('Server Error with Location', error)
            });
        
    }, [])

    return <section className='character-list grid-view'>
        {location.map(location => (
          <LocationCard key={location} location={location} />
        ))}
    </section>
}
