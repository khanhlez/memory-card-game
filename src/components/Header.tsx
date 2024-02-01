import { HeaderProps } from '~/types.tsx'

const Header = ({ score, bestScore }: HeaderProps) => {
  return (
    <header className='flex justify-between items-center pb-10'>
      <div>
        <h1 className='text-4xl font-bold mb-2'>Football Player Memory Game</h1>
        <span className='text-neutral-500'>
          Get points by clicking on an image but don't click on any more than once!
        </span>
      </div>
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
