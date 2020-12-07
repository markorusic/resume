import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import './index.css'
import resume from './data/resume-data.json'
import ResumeV1 from './resume-v1'

const App = () => <ResumeV1 resume={resume} />

export default App
