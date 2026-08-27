import type { TabId } from "../App";

const tabs: { id: TabId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'project', label: 'Project' },
]

type Props = {
    activeTab: TabId,
    onChange: (tab: TabId) => void
}
export default function Header({activeTab, onChange}: Props) {
    return(
        <header className="header">    
            {tabs.map((tab)=>(
                <button
                    key={tab.id}
                    onClick={()=>onChange(tab.id)}
                    className={`nav-item ${activeTab === tab.id ? 'active' : ''}`}
                >
                    {tab.label}
                </button>
            ))}
        </header>
    )
}