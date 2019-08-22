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
  <Div margin="0 0 40px 0" printMargin="0 0 10px 0">
    <SubTitle>{position}</SubTitle>
    <Div margin="7px 0" printMargin="3px 0">
      <div>{company}</div>
      <Italic>{description}</Italic>
    </Div>
    <Div margin="5px 0" printMargin="1px 0">
      <DateSpan time={time} location={location} />
    </Div>
    <Italic>Achievements</Italic>
    {achievements.map(achievement => (
      <SectionItem
        key={achievement.id}
        title={achievement.content}
        url={achievement.url}
      />
    ))}
  </Div>
)

export default WorkExperience
