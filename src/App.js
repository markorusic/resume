import React from 'react'
import ReactGA from 'react-ga'
import { createGlobalStyle } from 'styled-components'
import resume from './data/resume-data.json'
import ResumeV1 from './resume-v1'

ReactGA.initialize('UA-146442526-1', {
  debug: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
})
ReactGA.pageview(window.location.pathname + window.location.search)

const GlobalStyle = createGlobalStyle`
  @import url("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const App = () => (
  <>
    <GlobalStyle />
    <ResumeV1 resume={resume} />
  </>
)

export default App
