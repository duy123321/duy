import '../TileDetail.css'

interface CACIProps {
    onBackClick: () => void
    isVisible: boolean
}

function CACI({ onBackClick, isVisible }: CACIProps) {
    const handleBackClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
        e.preventDefault()
        onBackClick()
    }

    return (
        <div className={`tile-detail-page ${isVisible ? 'visible' : 'hidden'}`}>
            <div className="tile-detail-container">
                <a href="#home" className="back-link" onClick={handleBackClick}>← Back</a>
                <div className="tile-detail-content">
                    <h1 className="tile-detail-title">CACI</h1>
                    <div className="tile-detail-text">
                        <p>
                            Add your content about CACI here.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CACI
