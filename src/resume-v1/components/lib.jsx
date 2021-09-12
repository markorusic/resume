import React from 'react'
import styled from 'styled-components'

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

export const Div = styled.div`
  margin: ${props => (props.margin ? props.margin : '')};
  padding: ${props => (props.padding ? props.padding : '')};
  color: ${props => (props.color ? props.color : '#000')};
  @media print {
    margin: ${props => (props.printMargin ? props.printMargin : '')};
    padding: ${props => (props.printPadding ? props.printPadding : '')};
  }
`

export const PageContainer = styled.div`
  max-width: 1100px;
  margin: 1em auto;
  font-family: sans-serif;
`

export const Container = styled.div`
  padding: 1em 2em;
  @page {
    padding: 0.5em 1em;
    size: auto;
    margin: 0;
  }
`

export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
`

export const Box = styled.div`
  flex-basis: 100%;
  flex: ${props => (props.size ? parseInt(props.size) / 12 : 1)};
`

export const Title = styled.h3`
  text-transform: uppercase;
  font-size: 20px;
  color: #000;
  margin-bottom: 10px;
  @media print {
    margin-bottom: 5px;
  }
`

export const SubTitle = styled.h4`
  font-size: 17px;
  margin-bottom: 5px;
  font-weight: bold;
  @media print {
    margin-bottom: 2px;
  }
`

export const Section = ({ title, children, ...props }) => (
  <Div margin="0 0 20px 0" {...props}>
    <Title>{title}</Title>
    <div>{children}</div>
  </Div>
)

export const PrintText = styled.span`
  @media print {
    font-size: ${props => (props.fontSize ? props.fontSize : '12px')};
    line-height: 0px !important;
  }
`
const SectionItemContainer = styled.div`
  margin-bottom: 10px;
  @media print {
    margin-bottom: 3px;
  }
`

export const SectionItem = ({ title, url, children, ...props }) => (
  <SectionItemContainer>
    <Flex {...props}>
      <Div margin="0 10px 0 0" color="#000">
        -
      </Div>
      <Box>
        {children ? children : <PrintText>{title}</PrintText>}
        {url && (
          <Icon
            tag="a"
            type="external-link"
            href={url}
            target="_blank"
            style={{
              textDecoration: 'none',
              marginLeft: '5px',
              color: '#000'
            }}
          />
        )}
      </Box>
    </Flex>
  </SectionItemContainer>
)

export const Italic = styled.span`
  color: ${props => (props.color ? props.color : 'gray')};
  font-style: italic;
  font-size: ${props => (props.fontSize ? props.fontSize : '12px')};
`

export const Link = styled.a`
  text-decoration: none;
  color: black;
`

export const Avatar = styled.img`
  max-width: 130px;
  max-height: 130px;
  border-radius: 50%;
  @media print {
    max-width: 110px;
    max-height: 110px;
  }
`
export const DateSpan = ({ time, location }) => (
  <Flex justifyContent="space-between">
    <Italic>{time}</Italic>
    <Italic>{location}</Italic>
  </Flex>
)

export const TagCard = styled.span`
  display: inline-block;
  border-radius: 5px;
  padding: 5px 30px;
  margin: 3px;
  font-size: 17px;
  color: #000;
  border: 1px solid black;
  @media print {
    padding: 5px 10px;
    margin: 2px;
    font-size: 12px;
  }
`
