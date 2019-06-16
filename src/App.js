import React from 'react'
import content from './content.json'
import BasicInfo from './components/basic-info'
import Links from './components/links'
import WorkExperience from './components/work-experience'
import { PageContainer, FlexContainer, Box, Section } from './components/lib'

const App = () => (
  <PageContainer>
    <BasicInfo
      name="Marko Rusić"
      avatar="https://avatars1.githubusercontent.com/u/25515080?s=400&u=f7e97dcd06409a3037d1481d38631861e9709562&v=4"
      title="Full Stack Developer"
      description="Full Stack Developer with expertise in wide variety of fields. I am responsible, ambitious, analytical and well organized person. I’m very good in logical and problem solving tasks. I’m quick learner and constantly searching for new challenge."
    />
    <Links
      email="markousp5@gmail.com"
      address="Belgrade, Serbia"
      phone="+381 60 4609090"
      linkedin="https://linkedin.com/in/markorusic"
      website="https://markorusic.github.io"
      github="https://github.com/markorusic"
    />
    <FlexContainer>
      <Box size="5">
        <Section title="Work experience">
          {content.workExperience.map(we => (
            <WorkExperience key={we.id} {...we} />
          ))}
        </Section>
      </Box>
      <Box size="1" />
      <Box size="5">
        <Section title="Work experience">
          {content.workExperience.map(we => (
            <WorkExperience key={we.id} {...we} />
          ))}
        </Section>
      </Box>
    </FlexContainer>
  </PageContainer>
)

export default App
