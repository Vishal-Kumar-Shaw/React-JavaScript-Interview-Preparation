
import './App.css'
import TimerSection from './Sections/TimerSection'
import TypingIndicator from './Sections/TypingIndicator'
import WeatherAPI from './Sections/WeatherAPI'
import WindowSize from './Sections/WindowSize'

function App() {

  return (
    <>
     <h1> Welcome to Productivity Dashboard </h1>
     <TimerSection/>
     <WeatherAPI/>
     <WindowSize/>
     <TypingIndicator/>
    </>
  )
}

export default App
