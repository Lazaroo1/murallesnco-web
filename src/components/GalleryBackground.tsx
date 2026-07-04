import { useEffect, useState } from 'react'

type GalleryBackgroundProps = {
  imagePaths: string[]
  className?: string
  imageClassName?: string
  overlayClassName?: string
  intervalMs?: number
  transitionMs?: number
}

function GalleryBackground({
  imagePaths,
  className = 'absolute inset-0 h-screen w-full overflow-hidden',
  imageClassName = 'absolute inset-0 h-full w-full object-cover',
  overlayClassName = 'absolute inset-0 bg-black/50',
  intervalMs = 8000,
  transitionMs = 1500,
}: GalleryBackgroundProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (imagePaths.length <= 1) {
      return
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % imagePaths.length)
    }, intervalMs)

    return () => window.clearInterval(intervalId)
  }, [imagePaths.length, intervalMs])

  if (imagePaths.length === 0) {
    return <div className="absolute inset-0 bg-black" aria-hidden="true" />
  }

  return (
    <div className={className} aria-hidden="true">
      {imagePaths.map((imagePath, index) => (
        <img
          key={imagePath}
          src={imagePath}
          alt=""
          className={`${imageClassName} transition-opacity ease-in-out ${
            index === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDuration: `${transitionMs}ms` }}
        />
      ))}
      <div className={overlayClassName} />
    </div>
  )
}

export default GalleryBackground
