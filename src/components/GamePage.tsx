import Card from '~/components/Card.tsx'
import { data } from '~/sampleData.ts'
import { GamePageProps } from '~/types.tsx'

const GamePage = ({ setScore, setBestScore }: GamePageProps) => {
  return (
    <div className='flex flex-wrap justify-center items-center gap-8'>
      {data.map((player) => (
        <Card
          key={player.id}
          player={player}
          imageSource={`/images/${player.image}.png`}
          setScore={setScore}
          setBestScore={setBestScore}
        />
      ))}
    </div>
  )
}
export default GamePage
