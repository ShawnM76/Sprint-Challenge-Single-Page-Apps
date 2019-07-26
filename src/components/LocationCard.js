import React from 'react'
import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default function LocationCard ({ location }) {
  // image={image}
  const { name, type, dimension, residents } = location;
  return (
    <div className="cards">
      <Card>
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Description>{type} - {dimension}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Link to={`/characters`}>
            {residents.length} residents
          </Link>
        </Card.Content>
      </Card>
    </div>
  )
}
