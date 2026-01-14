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
                    <h3 className="tile-detail-subtitle">Full Stack Software Engineer Intern</h3>
                    <br />
                    <h3 className="tile-detail-subtitle">June 2022 - August 2022</h3>
                    <br />
                    <div className="tile-detail-text">
                        <p>
                            Architected and implemented the development of a decentralized file management system utilizing blockchain technology, enhancing security and transparency.
                            Engineered a React application enabling seamless file uploads and downloads via the InterPlanetary File System (IPFS), eliminating traditional database dependencies.
                            Utilized Hyperledger Fabric to automate file permission and access controls, effectively removing the necessity for a centralized system administrator.

                        </p>
                        <br />
                        <h3 className="tile-detail-subtitle">June 2021 - August 202</h3>
                        <br />
                        <p>
                            Created a React/Spring app to schedule, track, and report on the success and failure of photo captures across a network of satellites.
                            Simulated all 480+ satellites using real time weather data to generate reports and models on image capturing.
                            Improved nearest-satellite search efficiency by over 95% through the implementation of a quad-tree model.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CACI
