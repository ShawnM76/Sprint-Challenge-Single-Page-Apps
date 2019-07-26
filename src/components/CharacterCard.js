import React from 'react'

export default function CharacterCard ({ character }) {
  const { image, name, species, status, location, origin, episode } = character;
  return (
    <div>
      <img src={image}></img>
      <h4>{name}</h4>
      <p>{species}{status}</p>
      <p>Location: {location.name}</p>
      <p>Origin: {origin.name}</p>
      <button>Episodes</button>
    </div>
  )
}
