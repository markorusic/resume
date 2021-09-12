import React, { FC } from 'react'
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
  Italic,
  TagCard,
  PrintText
} from './components/lib'
import { lang } from '../lang'

const ResumeV1 = ({ resume }) => (
  <PageContainer>
    <Container>
      <BasicInfo {...resume}>
        <Links links={resume.links} />
      </BasicInfo>
    </Container>
    <Container>
      <Flex justifyContent="space-between">
        <Box size="6">
          {resume.bio && resume.bio.length > 0 && (
            <Section title={lang.aboutMe}>
              {resume.bio.map(sentence => (
                <Div key={sentence} margin="10px 0 0 0">
                  <PrintText>{sentence}</PrintText>
                </Div>
              ))}
            </Section>
          )}

          {resume.workExperience && resume.workExperience.length > 0 && (
            <Section title={lang.workExpirience}>
              {resume.workExperience.map(experience => (
                <WorkExperience key={experience.id} {...experience} />
              ))}
            </Section>
          )}
        </Box>
        <Box size="1" />
        <Box size="5">
          {resume.education && resume.education.length > 0 && (
            <Section title={lang.education}>
              {resume.education.map(ed => (
                <Div key={ed.id} margin="0 0 25px 0" printMargin="0 0 10px 0">
                  <PrintText fontSize="15px">{ed.institution}</PrintText>
                  <Div margin="0 0 5px 0" printMargin="0 0 2px 0">
                    <PrintText fontSize="14px">{ed.name}</PrintText>
                  </Div>
                  <DateSpan time={ed.time} location={ed.location} />
                </Div>
              ))}
            </Section>
          )}

          {resume.skils && resume.skils.length > 0 && (
            <Section title={lang.skils}>
              {resume.skils.map(skill => (
                <TagCard key={skill}>{skill}</TagCard>
              ))}
            </Section>
          )}

          {resume.projects && resume.projects.length > 0 && (
            <Section title={lang.projects}>
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
          )}

          {resume.competitions && resume.competitions.length > 0 && (
            <Section title={lang.competitions}>
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
          )}
        </Box>
      </Flex>
    </Container>
  </PageContainer>
)

export default ResumeV1
