import { useRef, useState, useEffect } from 'react'

export function useCarousel() {
  const carouselRef = useRef<HTMLElement>(null)
  const [carouselWidth, setCarouselWidth] = useState(0)

  useEffect(() => {
    if (!carouselRef.current) return

    setCarouselWidth(
      carouselRef.current?.scrollWidth - carouselRef.current?.offsetWidth,
    )
  }, [])

  return { carouselRef, carouselWidth }
}
