import React from 'react'
import { Div, Italic, SectionItem, SubTitle, DateSpan } from './lib'

const WorkExperience = ({
  position,
  company,
  location,
  description,
  time,
  achievements = []
}) => (
  <Div margin="0 0 40px 0">
    <SubTitle>{position}</SubTitle>
    <Div margin="7px 0">
      <div>{company}</div>
      <Italic>{description}</Italic>
    </Div>
    <Div margin="5px 0">
      <DateSpan time={time} location={location} />
    </Div>
    <Italic>Achievements</Italic>
    {achievements.map(achievement => (
      <SectionItem key={achievement.id} url={achievement.url}>
        {achievement.content}
      </SectionItem>
    ))}
  </Div>
)

export default WorkExperience
