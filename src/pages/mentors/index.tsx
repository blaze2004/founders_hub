import React from 'react'
import Hero from './MentorComps/hero'
import ChooseUs from './MentorComps/ChooseUs'
import BecomeMentor from './MentorComps/BecomeMentor'
import FindMentor from './MentorComps/FindMentor'

const index = () => {
  return (
    <div>
        <Hero />
        <ChooseUs />
        <FindMentor />
        <BecomeMentor />
    </div>
  )
}

export default index