import { useEffect, useState } from 'react'

type GalleryBackgroundProps = {
  imagePaths: string[]
  className?: string
  imageClassName?: string
  overlayClassName?: string
  intervalMs?: number
  transitionMs?: number
  firstImageLoading?: 'eager' | 'lazy'
  initialIndex?: number
}

function GalleryBackground({
  imagePaths,
  className = 'absolute inset-0 h-screen w-full overflow-hidden',
  imageClassName = 'absolute inset-0 h-full w-full object-cover',
  overlayClassName = 'absolute inset-0 bg-black/50',
  intervalMs = 8000,
  transitionMs = 1500,
  firstImageLoading = 'eager',
  initialIndex = 0,
}: GalleryBackgroundProps) {
  const [activeIndex, setActiveIndex] = useState(() =>
    imagePaths.length === 0 ? 0 : initialIndex % imagePaths.length,
  )
  const [pendingIndex, setPendingIndex] = useState<number | null>(null)
  const [isCrossfading, setIsCrossfading] = useState(false)

  useEffect(() => {
    if (imagePaths.length <= 1 || pendingIndex !== null) {
      return
    }

    const timeoutId = window.setTimeout(() => {
      setPendingIndex((activeIndex + 1) % imagePaths.length)
    }, intervalMs)

    return () => window.clearTimeout(timeoutId)
  }, [activeIndex, imagePaths.length, intervalMs, pendingIndex])

  if (imagePaths.length === 0) {
    return <div className="absolute inset-0 bg-black" aria-hidden="true" />
  }

  return (
    <div className={className} aria-hidden="true">
      <img
        key={imagePaths[activeIndex]}
        src={imagePaths[activeIndex]}
        alt=""
        loading={activeIndex === 0 ? firstImageLoading : 'lazy'}
        className={imageClassName}
      />
      {pendingIndex !== null && (
        <img
          key={imagePaths[pendingIndex]}
          src={imagePaths[pendingIndex]}
          alt=""
          loading={pendingIndex === 0 ? firstImageLoading : 'lazy'}
          className={`${imageClassName} transition-opacity ease-in-out ${
            isCrossfading ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDuration: `${transitionMs}ms` }}
          onLoad={() => setIsCrossfading(true)}
          onError={() => setPendingIndex(null)}
          onTransitionEnd={(event) => {
            if (event.propertyName !== 'opacity' || !isCrossfading) {
              return
            }

            setActiveIndex(pendingIndex)
            setPendingIndex(null)
            setIsCrossfading(false)
          }}
        />
      )}
      <div className={overlayClassName} />
    </div>
  )
}

export default GalleryBackground
