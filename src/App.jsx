import './App.css'
import CustomCursor from './components/CustomCursor'
import Header from './components/Header'
import HeroSection from './components/HeroSection'

function App() {

  return (
     <div className="w-full h-screen">
      <Header />
      <HeroSection />
      <CustomCursor />
    </div>
  )
}

export default App
