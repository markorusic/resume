import React from 'react'
import { lang } from '../../lang'
import { Div, Italic, SectionItem, SubTitle, DateSpan } from './lib'

const WorkExperience = ({
  position,
  company,
  location,
  description,
  time,
  achievements = []
}) => (
  <Div margin="0 0 30px 0" printMargin="0 0 7px 0">
    <SubTitle>{position}</SubTitle>
    <Div margin="7px 0" printMargin="3px 0">
      <div>
        {company} {description && <Italic>({description})</Italic>}
      </div>
    </Div>
    <Div margin="5px 0" printMargin="1px 0">
      <DateSpan time={time} location={location} />
    </Div>
    <Italic>{lang.workResponsibilities}</Italic>
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
