import { useEffect, useRef } from 'react'
import SelectableTile from './Tile'
import './TileRow.css'
import type { Tile } from '../types'

interface TileRowProps {
    games: Tile[]
    selectedIndex: number
    onSelect: (index: number) => void
    onActionClick: (actionIndex: number) => void
    selectedActionIndex: number
    onTileClick: (tile: Tile) => void
}

function TileRow({ games, selectedIndex, onSelect, onActionClick, selectedActionIndex, onTileClick }: TileRowProps) {
    const getImageUrl = (imagePath: string): string => {
        try {
            const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath
            return new URL(`../${cleanPath}`, import.meta.url).href
        } catch {
            return imagePath
        }
    }

    const actionButtons = [
        { icon: 'resources/icons/work.png', tooltip: 'Work' },
        { icon: 'resources/icons/project.png', tooltip: 'Projects' },
        { icon: 'resources/icons/school.png', tooltip: 'School' },
    ]
    const containerRef = useRef<HTMLDivElement>(null)
    const selectedRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const scrollToCenter = (): void => {
            if (selectedRef.current && containerRef.current) {
                const container = containerRef.current
                const selected = selectedRef.current

                // Get the position of the selected tile relative to the container
                const selectedLeft = selected.offsetLeft
                const selectedWidth = selected.offsetWidth

                // Calculate the center position of the selected tile
                const selectedCenter = selectedLeft + selectedWidth / 2

                // Calculate the viewport center (half of container width)
                const viewportCenter = container.clientWidth / 2

                // Calculate scroll position to center the selected tile
                const scrollLeft = selectedCenter - viewportCenter

                // Get maximum scroll position
                const maxScroll = container.scrollWidth - container.clientWidth

                // Clamp scroll position between 0 and maxScroll
                const clampedScrollLeft = Math.min(maxScroll, Math.max(0, scrollLeft))

                container.scrollTo({
                    left: clampedScrollLeft,
                    behavior: 'smooth'
                })
            }
        }

        // Use requestAnimationFrame to ensure DOM has updated
        requestAnimationFrame(() => {
            scrollToCenter()
        })
    }, [selectedIndex])

    return (
        <div className="game-grid-container">
            <div className="game-grid" ref={containerRef}>
                {games.map((game, index) => (
                    <div
                        key={game.id}
                        ref={index === selectedIndex ? selectedRef : null}
                        onClick={() => {
                            if (index === selectedIndex) {
                                // If clicking the already selected tile, open detail page
                                onTileClick(game)
                            } else {
                                // Otherwise, select the tile
                                onSelect(index)
                            }
                        }}
                    >
                        <SelectableTile
                            tile={game}
                            isSelected={index === selectedIndex}
                        />
                    </div>
                ))}
            </div>
            {selectedIndex < games.length && (
                <div className="game-info">
                    <div className="game-actions">
                        {actionButtons.map((action, index) => (
                            <button
                                key={index}
                                className={`action-button ${index === selectedActionIndex ? 'selected' : ''}`}
                                data-tooltip={action.tooltip}
                                onClick={() => onActionClick(index)}
                            >
                                <img
                                    src={getImageUrl(action.icon)}
                                    alt={action.tooltip}
                                    className="action-icon"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default TileRow
