import Header from "./components/Header"
import { useState } from "react"
import AboutPage from "./sections/AboutPage"
import HomePage from "./sections/HomePage"
import ProjectPage from "./sections/ProjectPage"
import {motion, AnimatePresence}from 'framer-motion'

export type TabId = 'home' | 'about' | 'project'

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('home')

  return (<div>
    <Header activeTab={activeTab} onChange={setActiveTab} />
    <main className="main">
      <AnimatePresence>
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8, position: 'absolute' }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          style={{ width: '100%' }}
        >
          {activeTab === 'home' && <HomePage onNavigate={setActiveTab}/>}
          {activeTab === 'about' && <AboutPage />}
          {activeTab === 'project' && <ProjectPage />}
        </motion.div>
      </AnimatePresence>
    </main>
  </div>
  )
}

export default App
