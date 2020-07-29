import React from 'react'
import styled from 'styled-components'
import { Avatar, Flex, Box } from './lib'

const DetailsContainer = styled(Box)`
  @media print {
    padding-left: 1em;
  }
`

const Title = styled.h3`
  color: gray;
  font-weight: normal;
`

const BasicInfo = ({ name, avatar, title, children }) => (
  <Flex>
    {avatar && (
      <Box size="2">
        <Avatar alt={name + "'s avatar"} src={avatar} />
      </Box>
    )}
    <DetailsContainer size="10">
      <h1>{name}</h1>
      <Title>{title}</Title>
      {children}
    </DetailsContainer>
  </Flex>
)

export default BasicInfo
