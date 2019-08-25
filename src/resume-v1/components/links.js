import React from 'react'
import styled from 'styled-components'
import { chunk } from 'shared/utils'
import { Flex, Box, Icon, Link, PrintText } from './lib'

const LinksContainer = styled(Flex)`
  width: 100%;
  padding: 0.5em 2em;
  margin: 0;
  background-color: #dde0e14f;
`

const LinkItemContainer = styled.div`
  margin: 6px 0;
  @media print {
    margin: 3px 0;
  }
`

const Links = ({ links, itemsPerRow = 3, ...props }) => (
  <LinksContainer {...props}>
    {chunk(links, itemsPerRow).map((_links, i, chunkedLinks) => (
      <React.Fragment key={i}>
        <Box size="5">
          {_links.map(link => (
            <LinkItemContainer key={link.id}>
              <Icon type={link.icon}>
                <Link href={link.url} target="_blank">
                  <PrintText>{link.text}</PrintText>
                </Link>
              </Icon>
            </LinkItemContainer>
          ))}
        </Box>
        {i !== chunkedLinks.length - 1 && <Box size="2" />}
      </React.Fragment>
    ))}
  </LinksContainer>
)

export default Links
