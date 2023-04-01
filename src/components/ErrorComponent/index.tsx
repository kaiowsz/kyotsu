import React from 'react'
import { Container, ErrorH1, Back } from './Elements'

const ErrorComponent = () => {
  return (
    <Container>
      <ErrorH1>Sorry. This page doesn't exist.</ErrorH1>
      <Back to="/">Back to Home Page</Back>
    </Container>
  )
}

export default ErrorComponent