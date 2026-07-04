import { useEffect, useState } from 'react'

type GalleryBackgroundProps = {
  imagePaths: string[]
}

function GalleryBackground({ imagePaths }: GalleryBackgroundProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (imagePaths.length <= 1) {
      return
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % imagePaths.length)
    }, 8000)

    return () => window.clearInterval(intervalId)
  }, [imagePaths.length])

  if (imagePaths.length === 0) {
    return <div className="absolute inset-0 bg-black" aria-hidden="true" />
  }

  return (
    <div className="absolute inset-0 h-screen w-full overflow-hidden" aria-hidden="true">
      {imagePaths.map((imagePath, index) => (
        <img
          key={imagePath}
          src={imagePath}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
            index === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-black/50" />
    </div>
  )
}

export default GalleryBackground
