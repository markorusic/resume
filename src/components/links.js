import React from 'react'
import styled from 'styled-components'
import { formatUrl } from '../utils'
import { FlexContainer, Box, Icon, Link } from './lib'

const LinkSpacer = styled.div`
  margin: 12px 0;
`

const Links = ({ email, address, phone, linkedin, website, github }) => (
  <FlexContainer bgColor="#dde0e14f">
    <Box size="6">
      <Icon type="envelope-o" title={email} />
      <LinkSpacer />
      <Icon type="mobile" title={phone} />
      <LinkSpacer />
      <Icon type="map-marker" title={address} />
      <LinkSpacer />
    </Box>
    <Box size="6">
      <Icon type="linkedin">
        <Link href={linkedin}>{formatUrl(linkedin)}</Link>
      </Icon>
      <LinkSpacer />
      <Icon type="github">
        <Link href={github}>{formatUrl(github)}</Link>
      </Icon>
      <LinkSpacer />
      <Icon type="globe">
        <Link href={website}>{formatUrl(website)}</Link>
      </Icon>
    </Box>
  </FlexContainer>
)

export default Links
