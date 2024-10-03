import { usePrivyId } from '@/utils'
import { FC } from 'react'

const Header: FC = () => {
  const { privyId, setPrivyId } = usePrivyId()

  const handleRemove = () => {
    setPrivyId('')
  }

  return (
    <header>
      Using Privy ID: <code>{privyId}</code>
      <button className="error" onClick={handleRemove}>
        Remove
      </button>
    </header>
  )
}

export default Header