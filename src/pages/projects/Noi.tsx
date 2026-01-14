import { useState } from 'react'
import '../TileDetail.css'

interface NoiProps {
    onBackClick: () => void
    isVisible: boolean
}

function Noi({ onBackClick, isVisible }: NoiProps) {
    const [isLoading, setIsLoading] = useState(true)

    const handleBackClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
        e.preventDefault()
        onBackClick()
    }

    return (
        <div className={`tile-detail-page ${isVisible ? 'visible' : 'hidden'}`}>
            <div className="tile-detail-container">
                <a href="#home" className="back-link" onClick={handleBackClick}>← Back</a>
                <div className="tile-detail-content">
                    <h1 className="tile-detail-title">Noi</h1>
                    <div className="tile-detail-text">
                        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, maxWidth: '100%', margin: '20px 0' }}>
                            {isLoading && (
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(90deg, #1a1a1a 25%, #2a2a2a 50%, #1a1a1a 75%)',
                                    backgroundSize: '200% 100%',
                                    animation: 'loading 1.5s infinite',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#888',
                                    fontSize: '14px'
                                }}>
                                    Loading video...
                                </div>
                            )}
                            <iframe
                                src="https://www.loom.com/embed/d941ed5168534c5582949efb0ccbd600?sid=1b8c8e7e-5b5e-4d3f-9a5e-3f3b3e3e3e3e"
                                frameBorder="0"
                                allowFullScreen
                                onLoad={() => setIsLoading(false)}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '8px',
                                    opacity: isLoading ? 0 : 1,
                                    transition: 'opacity 0.3s ease-in-out'
                                }}
                            ></iframe>
                        </div>
                        <p>
                            Language learning application that provides LLM generated feedback such as with grammar, pronunciation, and also context related feedback such as honorifics based off of daily uploaded videos.
                        </p>
                        <br />
                        <p>
                            Built the feedback flow to record and upload videos of a user speaking in their selected language, transcribed using Whisper, and funneled into an LLM that grades a users conversation on specific parameters.
                        </p>
                        <br />
                        <p>
                            Built a conversational agent using OpenAI's Realtime API to practice scenarios such as ordering food that seamlessly integrates with the feedback flow
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Noi
