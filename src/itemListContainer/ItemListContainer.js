import React from 'react'
import Container from 'react-bootstrap/Container';

export const ItemListContainer = ({greeting}) => {
  return (
    <Container>
        <h1>{greeting}</h1>
    </Container>
  )
}
