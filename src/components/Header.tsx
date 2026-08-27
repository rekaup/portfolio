import { useRef, useState, useLayoutEffect } from 'react'
import type { TabId } from '../App'
import '../styles/components/Header.css'

const tabs: { id: TabId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'project', label: 'Project' },
]

type Props = {
  activeTab: TabId
  onChange: (tab: TabId) => void
}

function Navbar({ activeTab, onChange }: Props) {
  const itemRefs = useRef<Record<TabId, HTMLButtonElement | null>>({
    home: null,
    about: null,
    project: null,
  })
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  })

  useLayoutEffect(() => {
    const el = itemRefs.current[activeTab]
    if (el) {
      setIndicatorStyle({
        left: el.offsetLeft,
        top: el.offsetTop,
        width: el.offsetWidth,
        height: el.offsetHeight,
      })
    }
  }, [activeTab])

  return (
    <header className="header">
      <div className="nav-indicator" style={indicatorStyle} />
      {tabs.map((tab) => (
        <button
          key={tab.id}
          ref={(el) => {
            itemRefs.current[tab.id] = el
          }}
          className={`nav-item ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </header>
  )
}

export default Navbar