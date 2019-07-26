import React from 'react'

export default function EpisodeCard ({ episodes }) {
  // image={image}
  const { name, air_date, episode } = episodes
  return (
    <div>
        <h2>{name}</h2>
        <p>First Aired: {air_date}</p>
        <p>Episode #: {episode}</p>
        
    </div>
  )
}