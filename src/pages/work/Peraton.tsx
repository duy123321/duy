import '../TileDetail.css'

interface PeratonProps {
    onBackClick: () => void
    isVisible: boolean
}

function Peraton({ onBackClick, isVisible }: PeratonProps) {
    const handleBackClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
        e.preventDefault()
        onBackClick()
    }

    return (
        <div className={`tile-detail-page ${isVisible ? 'visible' : 'hidden'}`}>
            <div className="tile-detail-container">
                <a href="#home" className="back-link" onClick={handleBackClick}>← Back</a>
                <div className="tile-detail-content">
                    <h1 className="tile-detail-title">Peraton</h1>
                    <h3 className="tile-detail-subtitle">Full Stack Software Engineer Co-op</h3>
                    <br />
                    <h3 className="tile-detail-subtitle">August 2021 – December 2021</h3>
                    <br />
                    <div className="tile-detail-text">
                        <p>
                            Developed an Angular/Express based web app for investigators to track/detect fraud in the healthcare system.
                            Employed Neo4j to construct an interactive network map that visualizes connections and patterns in healthcare claims, enabling real-time alerts for potential fraudulent behavior based on suspicious activity patterns.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Peraton
