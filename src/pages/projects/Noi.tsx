import '../TileDetail.css'

interface NoiProps {
    onBackClick: () => void
    isVisible: boolean
}

function Noi({ onBackClick, isVisible }: NoiProps) {
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
                        <p>
                            Add your content about Noi here.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Noi
