import React from 'react'

export default function LocationCard ({ location }) {
  // image={image}
  const { name, dimension, residents } = location;
  return (
    <div>
      <h2>{name}</h2>
      <p>{dimension}</p>
      <button># residents</button>
    </div>
  )
}
