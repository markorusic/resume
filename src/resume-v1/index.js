import React from 'react'
import BasicInfo from './components/basic-info'
import Links from './components/links'
import WorkExperience from './components/work-experience'
import {
  PageContainer,
  Flex,
  Container,
  Box,
  Section,
  SectionItem,
  Div,
  DateSpan,
  SubTitle,
  Italic,
  TagCard,
  PrintText
} from './components/lib'

const ResumeV1 = ({ resume }) => (
  <PageContainer>
    <Container>
      <BasicInfo
        name={resume.name}
        avatar={resume.avatar}
        title={resume.title}
        description={resume.description}
      />
    </Container>
    <Links links={resume.links} />
    <Container>
      <Flex justifyContent="space-between">
        <Box size="6">
          <Section title="Work experience">
            {resume.workExperience.map(experience => (
              <WorkExperience key={experience.id} {...experience} />
            ))}
          </Section>
          <Section title="Education">
            {resume.education.map(ed => (
              <Div key={ed.id} margin="0 0 25px 0" printMargin="0 0 10px 0">
                <SubTitle>{ed.name}</SubTitle>
                <Div margin="0 0 5px 0" printMargin="0 0 2px 0">
                  <PrintText fontSize="15px">{ed.institution}</PrintText>
                </Div>
                <DateSpan time={ed.time} location={ed.location} />
              </Div>
            ))}
          </Section>
        </Box>
        <Box size="1" />
        <Box size="5">
          <Section title="Skills">
            {resume.skils.map(skill => (
              <TagCard key={skill}>{skill}</TagCard>
            ))}
          </Section>
          <Section title="Personal projects">
            {resume.projects.map(project => (
              <Div
                key={project.id}
                margin="0 0 25px 0"
                printMargin="0 0 10px 0"
              >
                <PrintText fontSize="14px">{project.name}</PrintText>
                <SectionItem title={project.description} url={project.url} />
              </Div>
            ))}
          </Section>
          <Section title="Competitions">
            {resume.competitions.map(competition => (
              <Div
                key={competition.id}
                margin="0 0 25px 0"
                printMargin="0 0 10px 0"
              >
                <PrintText fontSize="14px">{competition.name}</PrintText>
                <div>
                  <Italic>{competition.description}</Italic>
                </div>
              </Div>
            ))}
          </Section>
        </Box>
      </Flex>
    </Container>
  </PageContainer>
)

export default ResumeV1
