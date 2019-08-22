import React from 'react'
import styled from 'styled-components'
import { Avatar, Flex, Box, PrintText, Div } from './lib'

const DetailsContainer = styled(Box)`
  @media print {
    padding-left: 1em;
  }
`

const BasicInfo = ({ name, avatar, title, description }) => (
  <Flex>
    {avatar && (
      <Box size="2">
        <Avatar alt={name + "'s avatar"} src={avatar} />
      </Box>
    )}
    <DetailsContainer size="10">
      <h1>{name}</h1>
      <h3>{title}</h3>
      <Div margin="5px 0 0 0">
        <PrintText>{description}</PrintText>
      </Div>
    </DetailsContainer>
  </Flex>
)

export default BasicInfo
