export interface HeaderProps {
  score: number
  bestScore: number
}

export interface GamePageProps {
  setScore: (score: number) => void
  setBestScore: (score: number) => void
}

export interface CardProps {
  player: {
    id: number
    name: string
    image: string
  }
  imageSource: string
  setScore: (score: number) => void
  setBestScore: (score: number) => void
}
