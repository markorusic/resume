import React from 'react'
import { createGlobalStyle } from 'styled-components'
import resume from './data/resume-data.json'
import ResumeV1 from './resume-v1'

const GlobalStyle = createGlobalStyle`
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
