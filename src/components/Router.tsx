import  { createContext, FC, ReactNode, useState } from 'react'
import { IRouterContext, Screens } from '@/types'

interface RouterProps {
  children: ReactNode
}

const defaultScreen = Screens.HOME

export const RouterContext = createContext<IRouterContext>({
  currentScreen: defaultScreen,
  setCurrentScreen: () => {},
})

const Router: FC<RouterProps> = ({ children }) => {
  const [currentScreen, setCurrentScreen] = useState(defaultScreen)

  return (
    <RouterContext.Provider value={{
      currentScreen,
      setCurrentScreen,
    }}>
      {children}
    </RouterContext.Provider>
  )
}

export default Router