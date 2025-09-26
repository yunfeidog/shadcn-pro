import { ZoomableImage } from "@/registry/shadcn-pro/components/zoomable-image"

export default function ZoomableImageShowcase() {
  return (
    <>
      <div className="w-full max-w-md">
        <ZoomableImage
          src="https://picsum.photos/400/300"
          alt="Demo zoomable image"
          width={400}
          height={300}
          className="w-full rounded-lg border shadow-sm"
        />
        <p className="text-muted-foreground mt-2 text-sm">
          Click image to zoom
        </p>
      </div>
    </>
  )
}
