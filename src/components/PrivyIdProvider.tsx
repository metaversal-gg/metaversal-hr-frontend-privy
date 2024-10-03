import { IPrivyIdContext, Screens } from '@/types'
import { clearLocalStorage, getStoredPrivyId, storePrivyId, useRouter } from '@/utils'
import { createContext, FC, ReactNode, useState } from 'react'

type PrivyIdProviderProps = {
  children: ReactNode
}

export const PrivyIdContext = createContext<IPrivyIdContext>({
  privyId: null,
  setPrivyId: () => {},
})

const PrivyIdProvider: FC<PrivyIdProviderProps> = ({ children }) => {
  const [ privyId, setPrivyId ] = useState<string | null>(getStoredPrivyId())
  const { setCurrentScreen } = useRouter()

  const handleSetPrivyId = (privyId: string) => {
    if (privyId) {
      setPrivyId(privyId)
      storePrivyId(privyId)
      setCurrentScreen(Screens.AUTH)
      return
    }

    setPrivyId(null)
    setCurrentScreen(Screens.HOME)
    clearLocalStorage()
  }

  return (
    <PrivyIdContext.Provider value={{
      privyId,
      setPrivyId: handleSetPrivyId,
    }}>
      {children}
    </PrivyIdContext.Provider>
  )
}

export default PrivyIdProvider