import React from 'react'
import { createGlobalStyle } from 'styled-components'
import resume from './data/resume-data.json'
import ResumeV1 from './resume-v1'

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
