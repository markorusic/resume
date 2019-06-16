import React from 'react'
import { Avatar, Flex, Box } from './lib'

const BasicInfo = ({ name, avatar, title, description }) => (
  <Flex>
    {avatar && (
      <Box size="2">
        <Avatar alt={name + "'s avatar"} src={avatar} />
      </Box>
    )}
    <Box size="10">
      <h1>{name}</h1>
      <h3>{title}</h3>
      <p>{description}</p>
    </Box>
  </Flex>
)

export default BasicInfo
