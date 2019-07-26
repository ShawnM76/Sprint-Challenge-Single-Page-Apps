import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import EpisodeCard from './EpisodeCard.js';

export default function EpisodeList() {
    // TODO: Add useState to track data from useEffect
    const [episode, setEpisode] = useState([]);
  
    useEffect(() => {
      
      // TODO: Add AJAX/API Request here - must run in `useEffect`
      Axios 
        .get(`https://rickandmortyapi.com/api/episode/`)
        .then(res => {
          const infoEpisode = res.data.results;
          setEpisode(res.data.results);
          console.log("Episode info", infoEpisode)
        })
        .catch(error => {
          console.log('Server Error with Episode', error);
        });
        
      //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    }, [])
  
    
    return <section className='character-list grid-view'>
        {episode.map(episodes => (
          <EpisodeCard key={episodes} episodes={episodes} />
        ))}
      </section>
  
  }