import React from 'react'
import { AppAbout, AppContact, AppFaq, AppFeature, AppHero, AppPricing, AppWorks } from '../components/Home'

function Home() {
  return (
    <div className="main">
      <AppHero />
      <AppAbout />
      <AppFeature />
      <AppWorks />
      {/* <AppFaq /> */}
      {/* <AppPricing /> */}
      {/* <AppContact /> */}
    </div>
  )
}

export default Home