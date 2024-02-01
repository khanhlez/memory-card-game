import { useState } from 'react'
import Card from '~/components/Card.tsx'
import { data } from '~/sampleData.ts'
import { GamePageProps, SampleData } from '~/types.tsx'

const GamePage = ({ setScore, setIsGameOver }: GamePageProps) => {
  const [selectedCards, setSelectedCards] = useState<SampleData[]>([])

  function handleClick(player: SampleData) {
    if (selectedCards.includes(player)) {
      setIsGameOver(true)
      setSelectedCards([])
    } else {
      setScore((score) => score + 1)
      setSelectedCards((selectedCards) => [...selectedCards, player])
      shuffle()
    }
  }

  function shuffle() {
    return data.sort(() => Math.random() - 0.5)
  }

  return (
    <div className='flex flex-wrap justify-center items-center gap-8'>
      {data.map((player) => (
        <Card
          key={player.id}
          player={player}
          imageSource={`/images/${player.image}.png`}
          handleSelectCard={() => handleClick(player)}
        />
      ))}
    </div>
  )
}
export default GamePage
