'use client'

import { useAI } from '@/registry/yunfei/hooks/use-ai'
import { Button } from '@/registry/yunfei/ui/button'
import { Card } from '@/registry/yunfei/ui/card'

export default function AITestPage() {
  const { text, isLoading, error, start, stop, reset } = useAI({
    onMessage: (data) => console.log('Received:', data),
    onError: (err) => console.error('Error:', err)
  })

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">AI Hook Test</h1>

      <div className="flex gap-2">
        <Button onClick={() => start()} disabled={isLoading}>
          {isLoading ? 'Streaming...' : 'Start AI Stream'}
        </Button>
        <Button onClick={stop} variant="outline" disabled={!isLoading}>
          Stop
        </Button>
        <Button onClick={reset} variant="outline">
          Reset
        </Button>
      </div>

      {error && (
        <div className="text-red-500 p-4 border border-red-200 rounded">
          Error: {error.message}
        </div>
      )}

      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">AI Response:</h2>
        <div className="min-h-[200px] whitespace-pre-wrap border rounded p-4 bg-gray-50">
          {text || (isLoading ? 'Loading...' : 'Click "Start AI Stream" to begin')}
        </div>
      </Card>

      <div className="text-sm text-gray-600">
        <p>Status: {isLoading ? 'Streaming' : 'Idle'}</p>
        <p>Characters received: {text.length}</p>
      </div>
    </div>
  )
}