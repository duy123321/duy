import { useState, useEffect } from 'react'
import './Header.css'

function Header() {
  const [time, setTime] = useState<Date>(new Date())
  const [battery, setBattery] = useState<number>(100)

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    // Simulate battery level (in real app, you'd use Battery API)
    const batteryTimer = setInterval(() => {
      setBattery(prev => Math.max(20, prev - 0.1))
    }, 60000)

    return () => {
      clearInterval(timer)
      clearInterval(batteryTimer)
    }
  }, [])

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })
  }

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
    <header className="header">
      <div className="header-left">
        <div className="user-profile">
          <div className="profile-avatar"><img src={getImageUrl('resources/mii.png')} alt="Profile" /></div>
        </div>
      </div>
      <div className="header-right">
        <div className="time-display">{formatTime(time)}</div>
        <div className="battery-indicator">
          <div className="battery-icon">
            <div className="battery-level" style={{ width: `${battery}%` }}></div>
          </div>
          <span className="battery-percent">{Math.round(battery)}%</span>
        </div>
      </div>
    </header>
  )
}

export default Header
