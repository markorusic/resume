import React from 'react'
import content from './content.json'
import BasicInfo from './components/basic-info'
import Links from './components/links'
import WorkExperience from './components/work-experience'
import { PageContainer, FlexContainer, Box, Section } from './components/lib'

const App = () => (
  <PageContainer>
    <BasicInfo
      name={content.name}
      avatar={content.avatar}
      title={content.title}
      description={content.description}
    />
    <Links
      email={content.email}
      address={content.address}
      phone={content.phone}
      linkedin={content.linkedin}
      website={content.website}
      github={content.github}
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
