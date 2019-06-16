import React from 'react'
import content from './content.json'
import BasicInfo from './components/basic-info'
import Links from './components/links'
import WorkExperience from './components/work-experience'
import {
  PageContainer,
  FlexContainer,
  Box,
  Section,
  SectionItem,
  Div,
  DateSpan,
  SubTitle,
  Italic,
  Card
} from './components/lib'

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
      location={content.location}
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
        <Section title="Education">
          {content.education.map(ed => (
            <Div key={ed.id} margin="0 0 25px 0">
              <SubTitle>{ed.name}</SubTitle>
              <Div>{ed.institution}</Div>
              <DateSpan time={ed.time} location={ed.location} />
            </Div>
          ))}
        </Section>
      </Box>
      <Box size="1" />
      <Box size="5">
        <Section title="Skills">
          <Div margin="10px 0 20px 0">
            {content.skils.map(skill => (
              <Card key={skill}>{skill}</Card>
            ))}
          </Div>
        </Section>
        <Section title="Personal projects">
          {content.projects.map(project => (
            <Div key={project.id} margin="0 0 25px 0">
              <Div>{project.name}</Div>
              <SectionItem>{project.description}</SectionItem>
            </Div>
          ))}
        </Section>
        <Section title="Competitions">
          {content.competitions.map(competition => (
            <Div key={competition.id} margin="0 0 25px 0">
              <Div>{competition.name}</Div>
              <Italic>{competition.description}</Italic>
            </Div>
          ))}
        </Section>
      </Box>
    </FlexContainer>
  </PageContainer>
)

export default App
