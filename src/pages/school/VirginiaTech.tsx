import '../TileDetail.css'

interface VirginiaTechProps {
    onBackClick: () => void
    isVisible: boolean
}

function VirginiaTech({ onBackClick, isVisible }: VirginiaTechProps) {
    const handleBackClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
        e.preventDefault()
        onBackClick()
    }

    return (
        <div className={`tile-detail-page ${isVisible ? 'visible' : 'hidden'}`}>
            <div className="tile-detail-container">
                <a href="#home" className="back-link" onClick={handleBackClick}>← Back</a>
                <div className="tile-detail-content">
                    <h1 className="tile-detail-title">Virginia Tech</h1>
                    <div className="tile-detail-text">
                        <p>
                            Add your content about Virginia Tech here.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VirginiaTech
