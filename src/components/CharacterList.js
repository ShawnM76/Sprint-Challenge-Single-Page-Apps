import React, { useEffect, useState } from 'react';
import Axios from 'axios';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    Axios 
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(res => {
        const infoCharacter = res.data.results;
        setCharacter(res.data.results);
        console.log("Character info", infoCharacter)
      })
      .catch(error => {
        console.log('Server Error with Characters', error);
      });
      
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [])

  
  return <section className='character-list grid-view'>

      <h2>TODO: `array.map()` over your state here!</h2>
    </section>

}
