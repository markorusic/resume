import React from 'react'
import styled from 'styled-components'
import { chunk } from '../utils'
import { FlexContainer, Box, Icon, Link, PrintText } from './lib'

const LinkSpacer = styled.div`
  margin: 12px 0;
  @media print {
    margin: 5px 0;
  }
`

const LinksContainer = styled(FlexContainer)`
  padding: 1em 0.5em;
  @media print {
    margin-left: -2em !important;
    padding: 0.5em 0.5em 0.5em 2em;
    width: 100vw !important;
  }
`

const Links = ({ links, itemsPerRow = 3, ...props }) => (
  <LinksContainer bgColor="#dde0e14f" {...props}>
    {chunk(links, itemsPerRow).map((_links, i) => (
      <Box key={i}>
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
    ))}
  </LinksContainer>
)

export default Links
