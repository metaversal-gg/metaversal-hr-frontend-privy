import { FC } from 'react'
import { PrivyProvider } from '@privy-io/react-auth'
import { Auth, ErrorBoundary } from '@/components'
import { usePrivyId } from '@/utils'

const AuthScreen: FC = () => {
  const { privyId } = usePrivyId()
  return (
    <ErrorBoundary>
      <PrivyProvider
        appId={privyId!}
        config={{
          loginMethods: ['email', 'wallet'],
          appearance: {
            theme: 'light',
            accentColor: '#676FFF',
            logo: 'https://mma.prnewswire.com/media/1738807/Metaversal_Logo.jpg?p=facebook',
          },
        }}
      >
        <Auth />
      </PrivyProvider>
    </ErrorBoundary>
  )
}

export default AuthScreen