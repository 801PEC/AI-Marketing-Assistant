import React, { useState } from 'react'
import { generatePoster } from '../services/aiServices'

const OutputScreen = ({ appState, setAppState, onRegenerateContent, DEBUG_MODE = true }) => {
    const [showPrompt, setShowPrompt] = useState(false)
    const [isUpdatingPoster, setIsUpdatingPoster] = useState(false)

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
        alert("Copied to clipboard!")
    }

    const handleRegeneratePoster = async () => {
        setIsUpdatingPoster(true)
        try {
            const newPosterUrl = await generatePoster(appState.imagePrompt)
            setAppState(prev => ({
                ...prev,
                posterUrl: newPosterUrl
            }))
        } catch (error) {
            console.error("Poster regeneration failed", error)
        } finally {
            setIsUpdatingPoster(false)
        }
    }

    return (
        <div className="screen output-screen">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-xl)' }}>
                <h2>Your AI Marketing Kit</h2>
                <button className="btn-secondary" onClick={onRegenerateContent}>
                    New Campaign
                </button>
            </div>

            <div className="output-grid">
                {/* Left Column: Content */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                    <div className="card">
                        <h3>Generated Caption</h3>
                        <p style={{ margin: 'var(--space-sm) 0', fontSize: '1rem', color: 'var(--text-primary)' }}>{appState.caption}</p>
                        <p style={{ color: 'var(--primary)', fontWeight: '500', marginBottom: 'var(--space-md)' }}>{appState.hashtags}</p>
                        <button
                            className="btn-primary"
                            style={{ width: '100%' }}
                            onClick={() => copyToClipboard(appState.caption + '\n' + appState.hashtags)}
                        >
                            Copy Caption
                        </button>
                    </div>

                    <div className="card">
                        <h3>Multi-language Options</h3>
                        <div className="lang-grid">
                            {Object.entries(appState.multiLanguageCaptions).map(([lang, text]) => (
                                <div key={lang} className="lang-card">
                                    <strong style={{ textTransform: 'capitalize', color: 'var(--primary)', display: 'block', marginBottom: '8px' }}>{lang}</strong>
                                    <p style={{ fontSize: '0.9rem' }}>{text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="card">
                        <div className="collapsible-header" onClick={() => setShowPrompt(!showPrompt)}>
                            <span>Image Prompt Details</span>
                            <span>{showPrompt ? '−' : '+'}</span>
                        </div>
                        {showPrompt && (
                            <div className="collapsible-content" style={{ marginTop: 'var(--space-sm)' }}>
                                {appState.imagePrompt}
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Column: Poster */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                    <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h3 style={{ width: '100%', textAlign: 'left' }}>Campaign Poster</h3>
                        <div style={{ position: 'relative', width: '100%', marginBottom: 'var(--space-md)', marginTop: 'var(--space-sm)' }}>
                            <img
                                src={appState.posterUrl}
                                alt="AI Generated Poster"
                                className="poster-preview"
                                style={{ opacity: isUpdatingPoster ? 0.5 : 1 }}
                            />
                            {isUpdatingPoster && (
                                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontWeight: 'bold', background: 'rgba(255,255,255,0.8)', padding: '10px 20px', borderRadius: '20px' }}>
                                    Updating...
                                </div>
                            )}
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-sm)', width: '100%' }}>
                            <button className="btn-secondary" onClick={() => window.open(appState.posterUrl)}>
                                Download
                            </button>
                            <button className="btn-primary" onClick={handleRegeneratePoster} disabled={isUpdatingPoster}>
                                Regen Poster
                            </button>
                        </div>
                    </div>

                    {DEBUG_MODE && (
                        <div className="card" style={{ background: '#1e293b', color: '#34d399', borderColor: '#1e293b' }}>
                            <strong style={{ color: '#f8fafc' }}>[DEBUG] AI Structured Prompt:</strong>
                            <pre style={{ whiteSpace: 'pre-wrap', marginTop: '10px', fontSize: '0.8rem', fontFamily: 'monospace' }}>
                                {appState.fullPrompt}
                            </pre>
                        </div>
                    )}
                </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: 'auto', paddingTop: 'var(--space-lg)' }}>
                <span className="badge-ai">Generated Using AI</span>
            </div>
        </div>
    )
}

export default OutputScreen
