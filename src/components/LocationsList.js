import React, { useEffect, useState } from 'react';
import Axios from 'axios';


export default function LocationsList() {
    const [location, setLocation] = useState([])

    useEffect(() => {
        Axios
            .get('https://rickandmortyapi.com/api/location/')
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
        <h2>This is location</h2>
    </section>
}
