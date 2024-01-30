import { HeaderProps } from '~/types.tsx'

const Header = ({ score, bestScore }: HeaderProps) => {
  return (
    <header className='flex justify-between items-center pb-10'>
      <h1 className='text-4xl font-bold'>Football Player Memory Game</h1>
      <div className='flex flex-col'>
        <div className='mb-2'>
          <span className='font-semibold'>Score: </span>
          <span>{score}</span>
        </div>
        <div>
          <span className='font-semibold'>Best Score: </span>
          <span>{bestScore}</span>
        </div>
      </div>
    </header>
  )
}
export default Header
