import React from 'react'
import styled from 'styled-components'
import { chunk } from 'shared/utils'
import { Flex, Box, Icon, Link, PrintText } from './lib'

const LinkSpacer = styled.div`
  margin: 12px 0;
  @media print {
    margin: 5px 0;
  }
`

const LinksContainer = styled(Flex)`
  width: 100%;
  padding: 1em 2em;
  margin: 0;
  background-color: #dde0e14f;
`

const Links = ({ links, itemsPerRow = 3, ...props }) => (
  <LinksContainer {...props}>
    {chunk(links, itemsPerRow).map((_links, i, chunkedLinks) => (
      <React.Fragment key={i}>
        <Box size="5">
          {_links.map(link => (
            <React.Fragment key={link.id}>
              <Icon type={link.icon}>
                <Link href={link.url} target="_blank">
                  <PrintText>{link.text}</PrintText>
                </Link>
              </Icon>
              <LinkSpacer />
            </React.Fragment>
          ))}
        </Box>
        {i !== chunkedLinks.length - 1 && <Box size="2" />}
      </React.Fragment>
    ))}
  </LinksContainer>
)

export default Links
