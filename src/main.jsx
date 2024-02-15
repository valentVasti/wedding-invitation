import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './font.css'
import LandingSection from './LandingSection'
import CouplesSection from './CouplesSection'
import QuotesSection from './QuotesSection'
import TimelineSection from './TimelineSection'
import FooterSection from './FooterSection'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <React.StrictMode>
      <LandingSection />
      <CouplesSection />
      <QuotesSection />
      <TimelineSection />
      <FooterSection/>
    </React.StrictMode>
  </>
)
