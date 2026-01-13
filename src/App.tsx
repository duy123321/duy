import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import GameGrid from './components/TileRow'
import About from './pages/About'
import Atlassian from './pages/work/Atlassian'
import CACI from './pages/work/CACI'
import Peraton from './pages/work/Peraton'
import Noi from './pages/projects/Noi'
import FlappyBirdAI from './pages/projects/FlappyBirdAI'
import VirginiaTech from './pages/school/VirginiaTech'
import type { Tile } from './types'

const workTiles: Tile[] = [
    { id: 1, title: 'Atlassian', image_path: 'resources/work/atlassian.png', category: 'work' },
    { id: 2, title: 'CACI', image_path: 'resources/work/caci.png', category: 'work' },
    { id: 3, title: 'Peraton', image_path: 'resources/work/peraton.png', category: 'work' },
]

const personalProjectTiles: Tile[] = [
    { id: 1, title: 'Noi', image_path: 'resources/projects/noi.png', category: 'projects' },
    { id: 2, title: 'Flappy Bird AI', image_path: 'resources/projects/flappy.png', category: 'projects' },
]

const schoolTiles: Tile[] = [
    { id: 1, title: 'Virginia Tech', image_path: 'resources/school/vt.png', category: 'school' },
]


function App() {
    const [selectedIndex, setSelectedIndex] = useState<number>(0)
    const [selectedRow, setSelectedRow] = useState<Tile[]>(workTiles)
    const [selectedActionIndex, setSelectedActionIndex] = useState<number>(0)
    const [currentView, setCurrentView] = useState<'home' | 'about' | 'tile'>('home')
    const [selectedTile, setSelectedTile] = useState<Tile | null>(null)

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
                    onTileClick={(tile) => {
                        setSelectedTile(tile)
                        setCurrentView('tile')
                    }}
                />
            </div>
            <About
                onBackClick={() => setCurrentView('home')}
                isVisible={currentView === 'about'}
            />
            <Atlassian
                onBackClick={() => {
                    setCurrentView('home')
                    setTimeout(() => setSelectedTile(null), 600)
                }}
                isVisible={currentView === 'tile' && selectedTile?.title === 'Atlassian'}
            />
            <CACI
                onBackClick={() => {
                    setCurrentView('home')
                    setTimeout(() => setSelectedTile(null), 600)
                }}
                isVisible={currentView === 'tile' && selectedTile?.title === 'CACI'}
            />
            <Peraton
                onBackClick={() => {
                    setCurrentView('home')
                    setTimeout(() => setSelectedTile(null), 600)
                }}
                isVisible={currentView === 'tile' && selectedTile?.title === 'Peraton'}
            />
            <Noi
                onBackClick={() => {
                    setCurrentView('home')
                    setTimeout(() => setSelectedTile(null), 600)
                }}
                isVisible={currentView === 'tile' && selectedTile?.title === 'Noi'}
            />
            <FlappyBirdAI
                onBackClick={() => {
                    setCurrentView('home')
                    setTimeout(() => setSelectedTile(null), 600)
                }}
                isVisible={currentView === 'tile' && selectedTile?.title === 'Flappy Bird AI'}
            />
            <VirginiaTech
                onBackClick={() => {
                    setCurrentView('home')
                    setTimeout(() => setSelectedTile(null), 600)
                }}
                isVisible={currentView === 'tile' && selectedTile?.title === 'Virginia Tech'}
            />
        </div>
    )
}

export default App
