import { CardProps } from '~/types.tsx'

const Card = ({ player, imageSource, handleSelectCard }: CardProps) => {
  return (
    <div className='flex items-center cursor-pointer' onClick={() => handleSelectCard()}>
      <img src={imageSource} alt={player.name} width='300px' />
    </div>
  )
}
export default Card
