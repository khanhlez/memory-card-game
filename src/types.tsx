export interface HeaderProps {
  score: number
  bestScore: number
}

export interface GamePageProps {
  setScore: React.Dispatch<React.SetStateAction<number>>
  setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>
}

export interface CardProps {
  player: {
    id: string
    name: string
    image: string
  }
  imageSource: string
  handleSelectCard: () => void
}

export interface SampleData {
  id: string
  name: string
  image: string
}
