import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './font.css'
import LandingSection from './section/LandingSection'
import CouplesSection from './section/CouplesSection'
import QuotesSection from './section/QuotesSection'
import TimelineSection from './section/TimelineSection'
import FooterSection from './section/FooterSection'
import EnvelopePage from './components/EnvelopePage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <React.StrictMode>
      <EnvelopePage/>
      <LandingSection />
      <CouplesSection />
      <QuotesSection />
      <TimelineSection />
      <FooterSection/>
    </React.StrictMode>
  </>
)
