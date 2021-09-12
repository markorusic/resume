import resume from '../data/resume-data.json'
import en from './en.json'
import sr from './sr.json'

const langs = { en, sr }

export const lang = langs[resume.lang] || en
