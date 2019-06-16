import React from 'react'
import { Avatar, Flex, Box } from './lib'

const BasicInfo = ({ name, title, description }) => (
  <Flex>
    <Box size="3">
      <Avatar
        alt={name + "'s avatar"}
        src="https://avatars1.githubusercontent.com/u/25515080?s=400&u=f7e97dcd06409a3037d1481d38631861e9709562&v=4"
      />
    </Box>
    <Box size="9">
      <h1>{name}</h1>
      <h3>{title}</h3>
      <p>{description}</p>
    </Box>
  </Flex>
)

export default BasicInfo
