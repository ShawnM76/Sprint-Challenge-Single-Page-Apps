import React from 'react'
import { Card } from 'semantic-ui-react'

export default function LocationCard ({ location }) {
  // image={image}
  const { name, type, dimension, residents } = location;
  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description>{type} - {dimension}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          # residents
        </a>
      </Card.Content>
    </Card>
  )
}
