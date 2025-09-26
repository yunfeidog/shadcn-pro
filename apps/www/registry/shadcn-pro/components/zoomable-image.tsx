import Image from "next/image"
import Zoom from "react-medium-image-zoom"

import "react-medium-image-zoom/dist/styles.css"

interface ZoomableImageProps {
  src: string
  alt?: string
  width?: number
  height?: number
  useNextImage?: boolean
  className?: string
}

export const ZoomableImage = ({
  src,
  alt = "",
  width,
  height,
  useNextImage = true,
  className,
}: ZoomableImageProps) => {
  const ImgComponent = useNextImage ? (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  ) : (
    <img
      src={src}
      width={width}
      height={height}
      alt={alt}
      className={className}
    />
  )

  return <Zoom>{ImgComponent}</Zoom>
}
