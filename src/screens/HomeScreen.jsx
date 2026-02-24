import React from 'react'

const HomeScreen = ({ onStart }) => {
    return (
        <div className="screen home-screen">
            <div className="hero">
                <h1>GenAI-MarketAssist</h1>
                <p>Multilingual AI Marketing for Small Businesses</p>
                <button
                    className="btn-primary"
                    style={{ padding: '16px 48px', fontSize: '1.1rem' }}
                    onClick={onStart}
                >
                    Get Started
                </button>
            </div>

            <div style={{ marginTop: 'auto', textAlign: 'center' }}>
                <span className="badge-ai">
                    Empowering shopkeepers with AI-driven creativity
                </span>
            </div>
        </div>
    )
}

export default HomeScreen
