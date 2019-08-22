import React from 'react'
import BasicInfo from 'components/basic-info'
import Links from 'components/links'
import WorkExperience from 'components/work-experience'
import Fetch from 'components/shared/fetch'
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
  TagCard,
  PrintText
} from 'components/lib'

const App = () => (
  <Fetch url="content.json">
    {({ value }) =>
      value && (
        <PageContainer>
          <BasicInfo
            name={value.name}
            avatar={value.avatar}
            title={value.title}
            description={value.description}
          />
          <Links links={value.links} />
          <FlexContainer justifyContent="space-between">
            <Box size="5">
              <Section title="Work experience">
                {value.workExperience.map(experience => (
                  <WorkExperience key={experience.id} {...experience} />
                ))}
              </Section>
              <Section title="Education">
                {value.education.map(ed => (
                  <Div key={ed.id} margin="0 0 25px 0" printMargin="0 0 10px 0">
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
                {value.skils.map(skill => (
                  <TagCard key={skill}>{skill}</TagCard>
                ))}
              </Section>
              <Section title="Personal projects">
                {value.projects.map(project => (
                  <Div
                    key={project.id}
                    margin="0 0 25px 0"
                    printMargin="0 0 10px 0"
                  >
                    <PrintText fontSize="14px">{project.name}</PrintText>
                    <SectionItem
                      title={project.description}
                      url={project.url}
                    />
                  </Div>
                ))}
              </Section>
              <Section title="Competitions">
                {value.competitions.map(competition => (
                  <Div
                    key={competition.id}
                    margin="0 0 25px 0"
                    printMargin="0 0 10px 0"
                  >
                    <PrintText fontSize="14px">{competition.name}</PrintText>
                    <Italic>{competition.description}</Italic>
                  </Div>
                ))}
              </Section>
            </Box>
          </FlexContainer>
        </PageContainer>
      )
    }
  </Fetch>
)

export default App
