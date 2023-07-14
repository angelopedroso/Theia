import { Player } from '@lottiefiles/react-lottie-player'
import Image from 'next/image'
import errorIcon from '@/assets/error-404.svg'

export function ErrorIcon() {
  return (
    <div className="flex">
      <Image
        className="w-auto"
        src={errorIcon}
        alt='letter "4" to "404"'
        priority
      />
      <Player
        className="h-[300px] w-[300px] bg-transparent"
        src={
          'https://lottie.host/ab7a5c4d-d0de-4877-be5e-8cffedab2bf1/f7kJBYBWYz.json'
        }
        speed={1}
        loop
        autoplay
      />
      <Image
        className="w-auto"
        src={errorIcon}
        alt='letter "4" to "404"'
        priority
      />
    </div>
  )
}
