import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, useParams } from 'react-router-dom'
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


// Helper to convert title to URL slug
const titleToSlug = (title: string): string => {
    return title.toLowerCase().replace(/\s+/g, '-')
}

// Home page component
function HomePage({ initialCategory }: { initialCategory?: string }) {
    const navigate = useNavigate()

    // Determine initial state based on category
    const getCategoryIndex = (category?: string): number => {
        if (category === 'work') return 0
        if (category === 'projects') return 1
        if (category === 'school') return 2
        return 0
    }

    const getCategoryTiles = (category?: string): Tile[] => {
        if (category === 'work') return workTiles
        if (category === 'projects') return personalProjectTiles
        if (category === 'school') return schoolTiles
        return workTiles
    }

    const [selectedIndex, setSelectedIndex] = useState<number>(0)
    const [selectedRow, setSelectedRow] = useState<Tile[]>(getCategoryTiles(initialCategory))
    const [selectedActionIndex, setSelectedActionIndex] = useState<number>(getCategoryIndex(initialCategory))

    const handleActionClick = (actionIndex: number): void => {
        const rowMap: Tile[][] = [
            workTiles,
            personalProjectTiles,
            schoolTiles,
        ]
        const categoryMap = ['work', 'projects', 'school']

        const selectedTiles = rowMap[actionIndex]
        if (selectedTiles !== undefined) {
            setSelectedRow(selectedTiles)
            setSelectedIndex(0)
            setSelectedActionIndex(actionIndex)
            // Update URL to reflect category
            navigate(`/${categoryMap[actionIndex]}`)
        }
    }

    const handleTileClick = (tile: Tile): void => {
        const slug = titleToSlug(tile.title)
        navigate(`/${tile.category}/${slug}`)
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
        <div className="app" id="home">
            <Header onProfileClick={() => navigate('/about')} />
            <GameGrid
                games={selectedRow}
                selectedIndex={selectedIndex}
                onSelect={setSelectedIndex}
                onActionClick={handleActionClick}
                selectedActionIndex={selectedActionIndex}
                onTileClick={handleTileClick}
            />
        </div>
    )
}

// Tile detail page wrapper
function TileDetailPage() {
    const { category, tile } = useParams<{ category: string; tile: string }>()
    const navigate = useNavigate()

    const handleBackClick = (): void => {
        // Navigate back to the category page
        navigate(`/${category}`)
    }

    if (!category || !tile) {
        return null
    }

    const key = `${category}/${tile}`

    // Render the appropriate component based on URL params
    return (
        <>
            {key === 'work/atlassian' && <Atlassian onBackClick={handleBackClick} isVisible={true} />}
            {key === 'work/caci' && <CACI onBackClick={handleBackClick} isVisible={true} />}
            {key === 'work/peraton' && <Peraton onBackClick={handleBackClick} isVisible={true} />}
            {key === 'projects/noi' && <Noi onBackClick={handleBackClick} isVisible={true} />}
            {key === 'projects/flappy-bird-ai' && <FlappyBirdAI onBackClick={handleBackClick} isVisible={true} />}
            {key === 'school/virginia-tech' && <VirginiaTech onBackClick={handleBackClick} isVisible={true} />}
        </>
    )
}

// About page wrapper
function AboutPage() {
    const navigate = useNavigate()

    return (
        <About
            onBackClick={() => navigate('/')}
            isVisible={true}
        />
    )
}

// Category page wrapper
function CategoryPage() {
    const { category } = useParams<{ category: string }>()

    // Validate category
    if (!category || !['work', 'projects', 'school'].includes(category)) {
        return <HomePage />
    }

    return <HomePage initialCategory={category} />
}

function App() {
    return (
        <div className="app-wrapper">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/:category" element={<CategoryPage />} />
                <Route path="/:category/:tile" element={<TileDetailPage />} />
            </Routes>
        </div>
    )
}

export default App
