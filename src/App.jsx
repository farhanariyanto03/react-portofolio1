import './App.css'
import About from './components/About'
import CustomCursor from './components/CustomCursor'
import Header from './components/Header'
import HeroSection from './components/HeroSection'

function App() {

  return (
     <div className="w-full h-screen">
      <Header />
      <HeroSection />
      <CustomCursor />
      <About />
    </div>
  )
}

export default App
