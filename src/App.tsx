import { useEffect } from 'react'
import { Screens } from '@/types'
import { usePrivyId, useRouter } from '@/utils'
import HomeScreen from './screens/HomeScreen'
import AuthScreen from './screens/AuthScreen'
import './App.css'

function App() {
  const { currentScreen, setCurrentScreen } = useRouter()
  const { privyId } = usePrivyId()

  useEffect(() => {
    if (privyId) {
      setCurrentScreen(Screens.AUTH)
      return
    }

    setCurrentScreen(Screens.HOME)
  }, [privyId])

  // Loading phase
  if (currentScreen === null) {
    return null
  }

  return (
    <main>
      <img src="/mv.svg" alt="logo" />
      {currentScreen === Screens.HOME && <HomeScreen />}
      {currentScreen === Screens.AUTH && <AuthScreen />}
    </main>
  )
}

export default App
