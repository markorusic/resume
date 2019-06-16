import React from 'react'
import BasicInfo from './components/basic-info'
import { Container } from './components/lib'

const App = () => (
  <Container>
    <BasicInfo
      name="Marko Rusić"
      title="Full Stack Developer"
      description="Full Stack Developer with expertise in wide variety of fields. I am responsible, ambitious, analytical and well organized person. I’m very good in logical and problem solving tasks. I’m quick learner and constantly searching for new challenge."
    />
  </Container>
)

export default App
