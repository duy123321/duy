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
                    <div className="tile-detail-text">
                        <p>
                            Add your content about Peraton here.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Peraton
