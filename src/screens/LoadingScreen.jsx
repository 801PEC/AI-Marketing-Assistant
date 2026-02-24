import React, { useState, useEffect } from 'react'

const messages = [
    "Generating AI marketing content...",
    "Optimizing tone & language...",
    "Designing custom poster...",
    "Magic in progress...",
    "Thinking practically for your business..."
]

const LoadingScreen = () => {
    const [messageIndex, setMessageIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setMessageIndex((prev) => (prev + 1) % messages.length)
        }, 800)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="screen loading-screen" style={{ justifyContent: 'center' }}>
            <div className="loading-container">
                <div className="spinner"></div>
                <h2>Please wait</h2>
                <p className="rotating-text">{messages[messageIndex]}</p>
            </div>
        </div>
    )
}

export default LoadingScreen
