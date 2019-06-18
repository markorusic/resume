import React from 'react'
import BasicInfo from 'components/basic-info'
import Links from 'components/links'
import WorkExperience from 'components/work-experience'
import Fetch from 'components/fetch'
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
} from 'components/lib'
// import html2canvas from 'html2canvas'
// import jsPDF from 'jspdf'

// window.pdf = () => {
//   const input = document.getElementById('root')
//   html2canvas(input).then(canvas => {
//     const imgData = canvas.toDataURL('image/png')
//     const pdf = new jsPDF()
//     pdf.addImage(imgData, 'PNG', 0, 0)
//     pdf.save('download.pdf')
//   })
// }

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
          <FlexContainer>
            <Box size="5">
              <Section title="Work experience">
                {value.workExperience.map(we => (
                  <WorkExperience key={we.id} {...we} />
                ))}
              </Section>
              <Section title="Education">
                {value.education.map(ed => (
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
                {value.skils.map(skill => (
                  <Card key={skill}>{skill}</Card>
                ))}
              </Section>
              <Section title="Personal projects">
                {value.projects.map(project => (
                  <Div key={project.id} margin="0 0 25px 0">
                    <Div>{project.name}</Div>
                    <SectionItem url={project.url}>
                      {project.description}
                    </SectionItem>
                  </Div>
                ))}
              </Section>
              <Section title="Competitions">
                {value.competitions.map(competition => (
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
    }
  </Fetch>
)

export default App
