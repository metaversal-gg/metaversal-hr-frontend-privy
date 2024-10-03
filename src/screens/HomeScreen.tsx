import { ChangeEvent, FC, FormEvent, useState } from 'react'
import { usePrivyId } from '@/utils'

const HomeScreen: FC = () => {
  const { setPrivyId } = usePrivyId()
  const [ text, setText ] = useState<string>('')

  const handleChange =  (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setPrivyId(text)
  }

  return (
    <div className="page">
      <form onSubmit={handleSubmit}>
        <div>Enter your Privy App ID</div>
        <input className="default" type="text" onChange={handleChange} value={text} />
        <button className="default" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default HomeScreen