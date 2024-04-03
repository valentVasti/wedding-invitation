import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './font.css'
import CouplesSection from './section/CouplesSection'
import QuotesSection from './section/QuotesSection'
import TimelineSection from './section/TimelineSection'
import FooterSection from './section/FooterSection'
import EnvelopePage from './components/EnvelopePage'
import HeroSection from './section/HeroSection'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <React.StrictMode>
      {/* <EnvelopePage/> */}
      <div className='overflow-x-hidden'>
        <HeroSection />
        <CouplesSection />
        <QuotesSection />
        <TimelineSection />
        <FooterSection />
      </div>
    </React.StrictMode>
  </>
)
