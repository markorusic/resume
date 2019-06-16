import React from 'react'
import styled from 'styled-components'

export const Div = styled.div`
  margin: ${props => (props.margin ? props.margin : '')};
  padding: ${props => (props.padding ? props.padding : '')};
  color: ${props => (props.color ? props.color : '#000')};
`

export const Icon = ({
  type,
  size = '',
  title,
  color = '#000',
  className = '',
  style = {},
  children,
  ...props
}) => (
  <span>
    <i
      style={{ color, ...style }}
      className={`
        fa fa-${type}
        ${size ? ' fa-' + size : ''}
        ${className ? ' ' + className : ''}`}
      aria-hidden="true"
      {...props}
    />
    <span style={{ marginLeft: '10px' }}>{title || children}</span>
  </span>
)

export const PageContainer = styled.div`
  padding-top: 3em;
  margin: 0 auto;
  max-width: 1100px;
`

export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
`

export const FlexContainer = styled(Flex)`
  padding: 1em 2em;
  margin-top: 1em;
  background-color: ${props => (props.bgColor ? props.bgColor : '#fff')};
`

export const Box = styled.div`
  flex-basis: 100%;
  flex: ${props => (props.size ? parseInt(props.size) / 12 : 1)};
`

export const Title = styled.h3`
  text-transform: uppercase;
  font-size: 20px;
  color: #487399;
  margin-bottom: 10px;
`

export const SubTitle = styled.h4`
  font-size: 17px;
  margin-bottom: 10px;
  font-weight: bold;
`

export const Section = ({ title, children, ...props }) => (
  <div {...props}>
    <Title>{title}</Title>
    <div>{children}</div>
  </div>
)

export const SectionItem = ({ url, children, ...props }) => (
  <Flex {...props}>
    <Div margin="0 10px 0 0" color="#487399">
      -
    </Div>
    <Box>
      {children}
      {url && <Icon type="save" />}
    </Box>
  </Flex>
)

export const Italic = styled.span`
  color: ${props => (props.color ? props.color : 'gray')};
  font-style: italic;
  font-size: ${props => (props.fontSize ? props.fontSize : '13px')};
`

export const Link = styled.a`
  text-decoration: none;
  color: black;
`

export const Avatar = styled.img`
  max-width: 150px;
  max-height: 150px;
  border-radius: 50%;
`
export const DateSpan = ({ time, location }) => (
  <Flex justifyContent="space-between">
    <Italic>{time}</Italic>
    <Italic>{location}</Italic>
  </Flex>
)
