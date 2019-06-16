// import React from 'react'
import styled from 'styled-components'

// Grid
export const Container = styled.div`
  padding: 3em 10em;
`

export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
`

export const Box = styled.div`
  flex-basis: 100%;
  flex: ${props => (props.size ? parseInt(props.size) / 12 : 1)};
`

// End Grid

export const Avatar = styled.img`
  max-width: 150px;
  max-height: 150px;
  border-radius: 50%;
`
