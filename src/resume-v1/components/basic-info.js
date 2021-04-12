import React from 'react'
import styled from 'styled-components'
import { Avatar, Flex, Box } from './lib'

const AvatarContainer = styled(Box)`
  @media print {
    margin-right: 1em;
  }
`

const Title = styled.h3`
  color: gray;
  font-weight: normal;
`

const BasicInfo = ({ name, avatar, title, children }) => (
  <Flex>
    {avatar && (
      <AvatarContainer size="2">
        <Avatar alt={name + "'s avatar"} src={avatar} />
      </AvatarContainer>
    )}
    <Box size="10">
      <h1>{name}</h1>
      <Title>{title}</Title>
      {children}
    </Box>
  </Flex>
)

export default BasicInfo
