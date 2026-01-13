import '../TileDetail.css'

interface AtlassianProps {
    onBackClick: () => void
    isVisible: boolean
}

function Atlassian({ onBackClick, isVisible }: AtlassianProps) {
    const handleBackClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
        e.preventDefault()
        onBackClick()
    }

    return (
        <div className={`tile-detail-page ${isVisible ? 'visible' : 'hidden'}`}>
            <div className="tile-detail-container">
                <a href="#home" className="back-link" onClick={handleBackClick}>← Back</a>
                <div className="tile-detail-content">
                    <h1 className="tile-detail-title">Atlassian</h1>
                    <h3 className="tile-detail-subtitle">Full Stack Software Engineer</h3>
                    <h3 className="tile-detail-subtitle">Aug 2023 - Present</h3>
                    <br />
                    <div className="tile-detail-text">
                        <p>
                            Led a team of 7 to overhaul Atlassian's compliance platform, enabling calculation and presentation of posture data
                            for 800+ deployed microservices for multiple standards, including FedRAMP, SOC2, and HIPAA. Implemented
                            new features such as framework-specific posture views and selective inventory filtering, supporting extensibility
                            to new component types and isolation contexts
                        </p>
                        <br />
                        <p>
                            Developed a compliance assessment model for 800+ microservices in the Atlassian cloud, evaluating them against
                            480+ requirements across five standards and three deployment boundaries, enabling service owners to monitor
                            compliance, identify issues, and swiftly implement corrective actions
                        </p>
                        <br />
                        <p>
                            Engineered an automated assessment engine with the compliance platform that performs over 70,000 daily
                            compliance checks on deployed resources, such as AWS resources and Docker images. This integration
                            aggregates results per service, enabling service owners to effectively view remediate issues within one tool
                        </p>
                        <br />
                        <p>
                            Integrated compliance platform to Atlassian pipelines to block deployments from services failing compliance
                            checks defined by security engineers scaling to over 1000+ microservices and 200+ checks
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Atlassian
