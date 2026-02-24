import React, { useState } from 'react'
import HomeScreen from './screens/HomeScreen'
import InputScreen from './screens/InputScreen'
import LoadingScreen from './screens/LoadingScreen'
import OutputScreen from './screens/OutputScreen'
import { buildPrompt, generateMarketingContent, generatePoster } from './services/aiServices'
import GlassContainer from './components/GlassContainer'
import './index.css'

const DEBUG_MODE = true

function App() {
  const [currentScreen, setCurrentScreen] = useState('home')
  const [appState, setAppState] = useState({
    businessType: '',
    language: '',
    tone: '',
    platform: '',
    offerDescription: '',
    caption: '',
    hashtags: '',
    posterUrl: '',
    imagePrompt: '',
    multiLanguageCaptions: {},
    fullPrompt: ''
  })

  const navigateToInput = () => setCurrentScreen('input')
  const navigateToHome = () => setCurrentScreen('home')

  const handleGenerate = async () => {
    setCurrentScreen('loading')
    const prompt = buildPrompt(appState)

    try {
      const textResults = await generateMarketingContent(appState)
      const posterUrl = await generatePoster(textResults.imagePrompt)

      setAppState(prev => ({
        ...prev,
        caption: textResults.caption,
        hashtags: textResults.hashtags,
        imagePrompt: textResults.imagePrompt,
        multiLanguageCaptions: textResults.multiLanguageCaptions,
        posterUrl: posterUrl,
        fullPrompt: prompt
      }))

      setTimeout(() => {
        setCurrentScreen('output')
      }, 1200)

    } catch (error) {
      console.error("AI Workflow failed", error)
      alert("Something went wrong with the AI generation. Please try again.")
      setCurrentScreen('input')
    }
  }

  const handleRegenerateContent = () => {
    setCurrentScreen('input')
  }

  return (
    <div className="app-container">
      {currentScreen === 'home' && (
        <GlassContainer>
          <HomeScreen onStart={navigateToInput} />
        </GlassContainer>
      )}

      {currentScreen === 'input' && (
        <GlassContainer>
          <InputScreen
            appState={appState}
            setAppState={setAppState}
            onGenerate={handleGenerate}
          />
        </GlassContainer>
      )}

      {currentScreen === 'loading' && (
        <GlassContainer>
          <LoadingScreen />
        </GlassContainer>
      )}

      {currentScreen === 'output' && (
        <GlassContainer>
          <OutputScreen
            appState={appState}
            setAppState={setAppState}
            onRegenerateContent={handleRegenerateContent}
            DEBUG_MODE={DEBUG_MODE}
          />
        </GlassContainer>
      )}
    </div>
  )
}

export default App
