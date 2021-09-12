import React from 'react'
import styled from 'styled-components'
import { chunk } from '../../shared/utils'
import { Flex, Box, Icon, Link, PrintText, Div } from './lib'

const LinksContainer = styled(Flex)`
  width: 100%;
  margin: 10px 0;
  @media print {
    margin: 3px 0;
  }
`

const Links = ({ links, itemsPerColumn = 2, ...props }) => (
  <LinksContainer {...props}>
    {chunk(links, itemsPerColumn).map((_links, i) => (
      <Box key={i} size="4">
        {_links.map(link => (
          <Div key={link.id} padding="5px 0 0 0">
            <Icon type={link.icon}>
              <Link href={link.url} target="_blank">
                <PrintText>{link.text}</PrintText>
              </Link>
            </Icon>
          </Div>
        ))}
      </Box>
    ))}
  </LinksContainer>
)

export default Links
