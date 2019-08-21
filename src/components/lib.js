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
  tag = 'span',
  iconProps = {},
  children,
  ...props
}) =>
  React.createElement(
    tag,
    props,
    <>
      <i
        style={{ color, ...style }}
        className={`
    fa fa-${type}
    ${size ? ' fa-' + size : ''}
    ${className ? ' ' + className : ''}`.trim()}
        aria-hidden="true"
        {...iconProps}
      />
      <span style={{ marginLeft: '10px' }}>{title || children}</span>
    </>
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
  <Div margin="0 0 30px 0" {...props}>
    <Title>{title}</Title>
    <div>{children}</div>
  </Div>
)

export const SectionItem = ({ url, children, ...props }) => (
  <Div margin="0 0 10px 0">
    <Flex {...props}>
      <Div margin="0 10px 0 0" color="#487399">
        -
      </Div>
      <Box>
        {children}
        {url && (
          <Icon
            tag="a"
            type="external-link"
            href={url}
            target="_blank"
            style={{
              textDecoration: 'none',
              marginLeft: '5px',
              color: '#487399'
            }}
          />
        )}
      </Box>
    </Flex>
  </Div>
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

export const Card = styled.span`
  display: inline-block;
  background-color: #487399;
  border-radius: 5px;
  padding: 5px 30px;
  margin: 3px;
  color: white;
  font-size: 17px;
`
