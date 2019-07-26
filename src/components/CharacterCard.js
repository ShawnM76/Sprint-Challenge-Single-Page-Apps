import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export default function CharacterCard ({ character }) {
  const { image, name, species, status, location, origin, episode } = character;
  return (
    <Card>
      <Card.Content>
        <Image src={image}></Image>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{species} {status}</Card.Meta>
        <Card.Description>Location: {location.name}</Card.Description>
        <Card.Description>Origin: {origin.name}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          Episode
        </a>
      </Card.Content>
    </Card>
  )
}
