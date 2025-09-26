"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useAI } from "@/registry/shadcn-pro/hooks/use-ai"

export default function AITestPage() {
  const { text, isLoading, error, start, stop, reset } = useAI({
    onMessage: (data) => console.log("Received:", data),
    onError: (err) => console.error("Error:", err),
  })

  return (
    <div className="mx-auto max-w-2xl space-y-6 p-6">
      <h1 className="text-3xl font-bold">AI Hook Test</h1>

      <div className="flex gap-2">
        <Button onClick={() => start()} disabled={isLoading}>
          {isLoading ? "Streaming..." : "Start AI Stream"}
        </Button>
        <Button onClick={stop} variant="outline" disabled={!isLoading}>
          Stop
        </Button>
        <Button onClick={reset} variant="outline">
          Reset
        </Button>
      </div>

      {error && (
        <div className="rounded border border-red-200 p-4 text-red-500">
          Error: {error.message}
        </div>
      )}

      <Card className="p-6">
        <h2 className="mb-4 text-lg font-semibold">AI Response:</h2>
        <div className="min-h-[200px] rounded border bg-gray-50 p-4 whitespace-pre-wrap">
          {text ||
            (isLoading ? "Loading..." : 'Click "Start AI Stream" to begin')}
        </div>
      </Card>

      <div className="text-sm text-gray-600">
        <p>Status: {isLoading ? "Streaming" : "Idle"}</p>
        <p>Characters received: {text.length}</p>
      </div>
    </div>
  )
}
