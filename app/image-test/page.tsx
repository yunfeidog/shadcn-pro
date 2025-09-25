'use client'

import { ZoomableImage } from '@/registry/yunfei/blocks/zoomable-image'

export default function ImageTestPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold">ZoomableImage Component Test</h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-4">Using Next.js Image (default)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ZoomableImage
              src="https://picsum.photos/400/300"
              alt="Test image with Next.js Image"
              width={400}
              height={300}
              className="rounded-lg border shadow-sm"
            />
            <ZoomableImage
              src="https://picsum.photos/300/400"
              alt="Portrait test image"
              width={300}
              height={400}
              className="rounded-lg border shadow-sm"
            />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Using Native img Tag</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ZoomableImage
              src="https://picsum.photos/250/200"
              alt="Native img small"
              width={250}
              height={200}
              useNextImage={false}
              className="rounded-lg border shadow-sm"
            />
            <ZoomableImage
              src="https://picsum.photos/250/200?random=1"
              alt="Native img medium"
              width={250}
              height={200}
              useNextImage={false}
              className="rounded-lg border shadow-sm"
            />
            <ZoomableImage
              src="https://picsum.photos/250/200?random=2"
              alt="Native img large"
              width={250}
              height={200}
              useNextImage={false}
              className="rounded-lg border shadow-sm"
            />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Different Sizes and Styles</h2>
          <div className="space-y-4">
            <ZoomableImage
              src="https://picsum.photos/800/200"
              alt="Wide banner image"
              width={800}
              height={200}
              className="w-full rounded-xl border shadow-lg"
            />

            <div className="flex justify-center">
              <ZoomableImage
                src="https://picsum.photos/300/300?random=3"
                alt="Square image"
                width={300}
                height={300}
                className="rounded-full border-4 border-blue-200 shadow-lg"
              />
            </div>
          </div>
        </section>
      </div>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold text-gray-700 mb-2">Usage Instructions:</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
          <li>Click on any image to zoom in</li>
          <li>Use scroll wheel or pinch gestures to zoom further</li>
          <li>Click outside the image or press ESC to close zoom</li>
          <li>Images use Picsum random image service for demonstration</li>
        </ul>
      </div>
    </div>
  )
}