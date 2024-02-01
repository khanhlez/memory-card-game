import { useEffect, useState } from 'react'
import Header from '~/components/Header'
import GamePage from '~/components/GamePage'
import Footer from '~/components/Footer'

function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [isGameOver, setIsGameOver] = useState(false)

  useEffect(() => {
    setScore(0)
    setIsGameOver(false)
  }, [isGameOver])

  useEffect(() => {
    setBestScore((bestScore) => Math.max(score, bestScore))
  }, [score, bestScore])

  return (
    <div className='p-8 pb-0 m-auto max-w-[1366px]'>
      <Header score={score} bestScore={bestScore} />
      <GamePage setScore={setScore} setIsGameOver={setIsGameOver} />
      <Footer />
    </div>
  )
}

export default App
