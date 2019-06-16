import React from 'react'
import { Avatar, Flex, Box } from './lib'

const BasicInfo = ({ name, avatar, title, description }) => (
  <Flex>
    {avatar && (
      <Box size="3">
        <Avatar alt={name + "'s avatar"} src={avatar} />
      </Box>
    )}
    <Box size="9">
      <h1>{name}</h1>
      <h3>{title}</h3>
      <p>{description}</p>
    </Box>
  </Flex>
)

export default BasicInfo
