import '../styles/components/About.css'
import art from '../assets/art-about.svg'

export default function AboutPage() {
    return(
    <div className="main about">
        <div className="about first">
            <div className="title">
                <p>Frontend Developer</p>
                <p> / Digital Artist</p>
            </div>
            <div className="discription">
                <p>Tech stack: React, Vite, Telegram Mini Apps.</p>
            </div>
        </div>
        <div className="about second">
            <img className="img-art" src={art}/>
        </div>
    </div>)
}