import '../styles/components/Home.css'
import type { TabId } from '../App'

type Props = {
  onNavigate: (tab: TabId) => void
}

export default function HomePage({ onNavigate }: Props) {
    return(
    <div className='main home'>
        <div className='home first'>
            <div className='first title'>
                <p>Frondend</p>
                <p>Devoloper</p>
            </div>
            <div className='home link'>
                <a
                href='#' 
                className='link card'>
                    <img className='link ico' src='src\assets\github-logo.svg' />
                    <p>github</p>
                </a>
                <a
                href='#' 
                className='link card'>
                    <img className='link ico' src='src\assets\telegram-logo.svg' />
                    <p>telegram</p>
                </a>
            </div>
        </div>
        <div className='home second'>
            <p>I write <b>clean, maintainable code</b> and make the development process 
<b> clear and predictable</b> from React interfaces to Telegram Mini Apps.</p>
          <button className='second button' onClick={() => onNavigate('project')}>
          My project
        </button>  
        </div>
    </div>)
}