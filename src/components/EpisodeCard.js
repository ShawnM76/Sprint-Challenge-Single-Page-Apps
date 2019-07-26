import React from 'react'
import { Card } from 'semantic-ui-react'

export default function EpisodeCard ({ episodes }) {
  // image={image}
  const { name, air_date, episode } = episodes
  return (
    <div className="cards">
        <Card>
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Description>First Aired: {air_date}</Card.Description>
                <Card.Description>Episode #: {episode}</Card.Description>
            </Card.Content>
        </Card>   
    </div> 
    
  )
}