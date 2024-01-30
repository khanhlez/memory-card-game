import { useState } from 'react'
import Header from '~/components/Header'
import GamePage from '~/components/GamePage'
import Footer from '~/components/Footer'

function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  return (
    <div className='p-8 pb-0 m-auto max-w-[1366px]'>
      <Header score={score} bestScore={bestScore} />
      <GamePage setScore={setScore} setBestScore={setBestScore} />
      <Footer />
    </div>
  )
}

export default App
