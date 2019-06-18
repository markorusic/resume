import React from 'react'
import styled from 'styled-components'
import { chunk } from '../utils'
import { FlexContainer, Box, Icon, Link } from './lib'

const LinkSpacer = styled.div`
  margin: 12px 0;
`

const Links = ({ links, itemsPerRow = 3, ...props }) => (
  <FlexContainer bgColor="#dde0e14f" {...props}>
    {chunk(links, itemsPerRow).map((_links, i) => (
      <Box key={i}>
        {_links.map(link => (
          <React.Fragment key={link.id}>
            <Icon type={link.icon}>
              {link.url ? (
                <Link href={link.url} target="_blank">
                  {link.text}
                </Link>
              ) : (
                <>{link.text}</>
              )}
            </Icon>
            <LinkSpacer />
          </React.Fragment>
        ))}
      </Box>
    ))}
  </FlexContainer>
)

export default Links
