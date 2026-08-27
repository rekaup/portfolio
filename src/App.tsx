import Header from "./components/Header"
import { useState } from "react"
import AboutPage from "./sections/AboutPage"
import HomePage from "./sections/HomePage"
import ProjectPage from "./sections/ProjectPage"

export type TabId = 'home' | 'about' | 'project'

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('home')

  return (<div>
    <Header activeTab={activeTab} onChange={setActiveTab} />
    <main className="main">
       {activeTab === 'home' && <HomePage />}
       {activeTab === 'about' && <AboutPage />}
       {activeTab === 'project' && <ProjectPage />}
    </main>
  </div>
  )
}

export default App
