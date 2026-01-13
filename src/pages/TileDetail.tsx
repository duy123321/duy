import './TileDetail.css'

interface TileDetailProps {
    title: string
    onBackClick: () => void
    isVisible: boolean
}

function TileDetail({ title, onBackClick, isVisible }: TileDetailProps) {
    const handleBackClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
        e.preventDefault()
        onBackClick()
    }

    return (
        <div className={`tile-detail-page ${isVisible ? 'visible' : 'hidden'}`}>
            <div className="tile-detail-container">
                <a href="#home" className="back-link" onClick={handleBackClick}>← Back</a>
                <div className="tile-detail-content">
                    <h1 className="tile-detail-title">{title}</h1>
                    <div className="tile-detail-text">
                        <p>
                            This is a placeholder page for {title}. You can update this content 
                            to provide more information about this item.
                        </p>
                        <p>
                            Add your own content here to describe your experience, projects, 
                            or any other relevant information.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TileDetail
