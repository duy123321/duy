import './Tile.css'
import type { Tile } from '../types'

interface SelectableTileProps {
    tile: Tile
    isSelected: boolean
}

function SelectableTile({ tile, isSelected }: SelectableTileProps) {
    // In Vite, we need to use import.meta.url for dynamic imports from src
    const getImageUrl = (imagePath: string): string => {
        try {
            // Remove leading slash if present and handle relative paths
            const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath
            // For images in src/resources, use new URL with import.meta.url
            // Path is relative to this component file
            return new URL(`../${cleanPath}`, import.meta.url).href
        } catch {
            // Fallback to the path as-is (for public folder or absolute URLs)
            return imagePath
        }
    }

    return (
        <div className={`game-tile ${isSelected ? 'selected' : ''}`}>
            <div className="game-tile-title-above">{tile.title}</div>
            <div className="game-tile-content">
                <img
                    className="tile-image"
                    src={getImageUrl(tile.image_path)}
                    alt={tile.title}
                />
            </div>
        </div>
    )
}

export default SelectableTile
