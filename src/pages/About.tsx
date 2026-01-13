import './About.css'

interface AboutProps {
    onBackClick: () => void
    isVisible: boolean
}

function About({ onBackClick, isVisible }: AboutProps) {
    const handleBackClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
        e.preventDefault()
        onBackClick()
    }

    return (
        <div className={`about-page ${isVisible ? 'visible' : 'hidden'}`} id="about">
            <div className="about-container">
                <a href="#home" className="back-link" onClick={handleBackClick}>← Back</a>
                <div className="about-content">
                    <h1 className="about-title">Welcome!</h1>
                    <div className="about-text">
                        <p>
                            My name is Duy Nguyen. I'm a software engineer that loves to build!
                        </p>
                        <p>
                            I'm a big fan of Nintendo hence the switch theme. I'd like to make this a Wii U theme one day,
                            similar to Wara Wara Plaza. However, I'm not goated at 3D modeling yet. But, I plan on tackling that soon.
                        </p>
                        <p>
                            I have many passions and hobbies outside of coding as well. Feel free to reach out if you'd like to connect!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
