import React, { useState } from 'react'
import { speechToText } from '../services/aiServices'

const InputScreen = ({ appState, setAppState, onGenerate }) => {
    const [isRecording, setIsRecording] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setAppState(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleMicClick = async () => {
        setIsRecording(true)
        try {
            const text = await speechToText()
            setAppState(prev => ({
                ...prev,
                offerDescription: text
            }))
        } catch (error) {
            console.error("Speech to text failed", error)
            alert("Mic failed. Please type manually.")
        } finally {
            setIsRecording(false)
        }
    }

    const handleGenerateClick = () => {
        if (!appState.businessType || !appState.language || !appState.tone || !appState.platform || !appState.offerDescription.trim()) {
            alert("Please fill in all fields to generate the best content!")
            return
        }
        onGenerate()
    }

    return (
        <div className="screen input-screen">
            <h2>Generate Marketing</h2>

            <div className="mic-section">
                <button
                    className={`mic-btn ${isRecording ? 'recording' : ''}`}
                    onClick={handleMicClick}
                    disabled={isRecording}
                >
                    {isRecording ? 'Listening...' : '🎤'}
                </button>
                <p>
                    {isRecording ? 'Please speak now...' : 'Tap mic to describe your offer in any language'}
                </p>
            </div>

            <div className="form-grid">
                <div>
                    <label>Business Type</label>
                    <select name="businessType" value={appState.businessType} onChange={handleChange}>
                        <option value="">Select Business</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Boutique">Boutique</option>
                        <option value="Tea Shop">Tea Shop</option>
                        <option value="Salon">Salon</option>
                        <option value="Electronics Shop">Electronics Shop</option>
                    </select>
                </div>

                <div>
                    <label>Language</label>
                    <select name="language" value={appState.language} onChange={handleChange}>
                        <option value="">Select Language</option>
                        <option value="Tamil">Tamil</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Telugu">Telugu</option>
                        <option value="English">English</option>
                    </select>
                </div>

                <div>
                    <label>Tone</label>
                    <select name="tone" value={appState.tone} onChange={handleChange}>
                        <option value="">Select Tone</option>
                        <option value="Professional">Professional</option>
                        <option value="Festive">Festive</option>
                        <option value="Funny">Funny</option>
                        <option value="Trendy">Trendy</option>
                    </select>
                </div>

                <div>
                    <label>Platform</label>
                    <select name="platform" value={appState.platform} onChange={handleChange}>
                        <option value="">Select Platform</option>
                        <option value="Instagram">Instagram</option>
                        <option value="WhatsApp">WhatsApp</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Poster">Poster</option>
                    </select>
                </div>

                <div className="full-width">
                    <label>Offer Description</label>
                    <textarea
                        name="offerDescription"
                        placeholder="e.g., Get 50% off on all cupcakes for Diwali!"
                        rows="4"
                        value={appState.offerDescription}
                        onChange={handleChange}
                    ></textarea>
                </div>
            </div>

            <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'center' }}>
                <button className="btn-primary" onClick={handleGenerateClick} style={{ width: '100%', maxWidth: '400px', margin: '32px auto 0' }}>
                    Generate Content & Poster
                </button>
            </div>
        </div>
    )
}

export default InputScreen
