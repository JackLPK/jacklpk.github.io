import "./App.css"
import Hero from "./components/Hero"
import AboutMe from "./components/AboutMe"
import SocialLinks from "./components/SocialLinks"
import Projects from "./components/Projects"
import Survey from "./components/Survey"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Hero />
      <AboutMe />
      <SocialLinks />
      <Projects />
      {/* <Survey /> */}
      <Footer />
    </div>
  )
}

export default App
