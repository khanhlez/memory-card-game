import { CardProps } from '~/types.tsx'

const Card = ({ player, imageSource, setScore, setBestScpre }: CardProps) => {
  return (
    <div className='flex items-center cursor-pointer'>
      <img src={imageSource} alt={player.name} width='300px' />
    </div>
  )
}
export default Card
