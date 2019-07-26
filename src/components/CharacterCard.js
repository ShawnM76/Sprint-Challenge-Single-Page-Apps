import React from 'react'
import { Link } from "react-router-dom"
import { Card, Icon, Image } from 'semantic-ui-react'

export default function CharacterCard ({ character }) {
  const { image, name, species, status, location, origin, episode } = character;
  return (
    <div className="cards">
      <Card>
        <Card.Content>
          <Image src={image}></Image>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>{species} {status}</Card.Meta>
          <Card.Description>Location: {location.name}</Card.Description>
          <Card.Description>Origin: {origin.name}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Link to={'/episodes'}>
            <Icon name='user' />
            Episode
          </Link>
        </Card.Content>
      </Card>
    </div>
  )
}
