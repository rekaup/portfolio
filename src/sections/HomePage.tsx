import '../styles/components/Home.css'
import GithubLogo from '../assets/github-logo.svg'
import TelegramLogo from '../assets/telegram-logo.svg'
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
                href='https://github.com/rekaup' 
                className='link card'>
                    <img className='link ico' src={GithubLogo} />
                    <p>github</p>
                </a>
                {/* <a
                href='https://t.me/akine_999' 
                className='link card'>
                    <img className='link ico' src={TelegramLogo} />
                    <p>telegram</p>
                </a> */}
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