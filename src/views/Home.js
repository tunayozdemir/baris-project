import React from 'react'
import { AppAbout, AppFeature, AppHero, AppWorks } from '../components/Home'

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