import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import GameGrid from './components/TileRow'
import About from './pages/About'
import type { Tile } from './types'

const workTiles: Tile[] = [
    { id: 1, title: 'Atlassian', image_path: 'resources/work/atlassian.png' },
    { id: 2, title: 'CACI', image_path: 'resources/work/caci.png' },
    { id: 3, title: 'Peraton', image_path: 'resources/work/peraton.png' },
]

const personalProjectTiles: Tile[] = [
    { id: 1, title: 'Noi', image_path: 'resources/projects/noi.png' },
    { id: 2, title: 'Flappy Bird AI', image_path: 'resources/projects/flappy.png' },
]

const schoolTiles: Tile[] = [
    { id: 1, title: 'Virginia Tech', image_path: 'resources/school/vt.png' },
]


function App() {
    const [selectedIndex, setSelectedIndex] = useState<number>(0)
    const [selectedRow, setSelectedRow] = useState<Tile[]>(workTiles)
    const [selectedActionIndex, setSelectedActionIndex] = useState<number>(0)
    const [currentView, setCurrentView] = useState<'home' | 'about'>('home')

    const handleActionClick = (actionIndex: number): void => {
        const rowMap: Tile[][] = [
            workTiles,
            personalProjectTiles,
            schoolTiles,
        ]

        const selectedTiles = rowMap[actionIndex]
        if (selectedTiles !== undefined) {
            setSelectedRow(selectedTiles)
            setSelectedIndex(0)
            setSelectedActionIndex(actionIndex)
        }
    }

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent): void => {
            if (e.key === 'ArrowLeft' && selectedIndex > 0) {
                setSelectedIndex(selectedIndex - 1)
            } else if (e.key === 'ArrowRight' && selectedIndex < selectedRow.length - 1) {
                setSelectedIndex(selectedIndex + 1)
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [selectedIndex, selectedRow.length])

    return (
        <div className="app-wrapper">
            <div
                className={`app ${currentView === 'home' ? 'visible' : 'hidden'}`}
                id="home"
            >
                <Header onProfileClick={() => setCurrentView('about')} />
                <GameGrid
                    games={selectedRow}
                    selectedIndex={selectedIndex}
                    onSelect={setSelectedIndex}
                    onActionClick={handleActionClick}
                    selectedActionIndex={selectedActionIndex}
                />
            </div>
            <About
                onBackClick={() => setCurrentView('home')}
                isVisible={currentView === 'about'}
            />
        </div>
    )
}

export default App
