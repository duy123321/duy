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
                    <h1 className="about-title">About Me</h1>
                    <div className="about-text">
                        <p>
                            Welcome! I'm a software engineer passionate about building meaningful
                            applications and solving complex problems. I enjoy working with modern
                            technologies and creating user-friendly experiences.
                        </p>
                        <p>
                            This is a space where I share my thoughts, projects, and experiences.
                            Feel free to explore my work and reach out if you'd like to connect!
                        </p>
                        <p>
                            You can update this content to write more about yourself, your background,
                            interests, and anything else you'd like to share.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
