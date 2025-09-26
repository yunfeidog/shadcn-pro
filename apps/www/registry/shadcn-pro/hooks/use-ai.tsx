"use client"

import { useEffect, useRef, useState } from "react"
import { fetchEventSource } from "@microsoft/fetch-event-source"

interface UseAIOptions {
  url?: string
  headers?: Record<string, string>
  onMessage?: (data: string) => void
  onError?: (error: Error) => void
  autoStart?: boolean
}

export function useAI({
  url = "/api/ai/stream",
  headers = {},
  onMessage,
  onError,
  autoStart = false,
}: UseAIOptions = {}) {
  const [text, setText] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const controllerRef = useRef<AbortController | null>(null)

  const start = (customUrl?: string) => {
    if (isLoading) return

    const streamUrl = customUrl || url
    if (!streamUrl) return

    setIsLoading(true)
    setError(null)
    setText("")

    const ctrl = new AbortController()
    controllerRef.current = ctrl

    fetchEventSource(streamUrl, {
      method: "GET",
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        ...headers,
      },
      signal: ctrl.signal,
      onmessage(event) {
        setText((prev) => prev + event.data)
        if (onMessage) onMessage(event.data)
      },
      onerror(err) {
        const error = err instanceof Error ? err : new Error("Stream error")
        setError(error)
        setIsLoading(false)
        if (onError) onError(error)
      },
      onclose() {
        setIsLoading(false)
      },
    })
  }

  const stop = () => {
    controllerRef.current?.abort()
    setIsLoading(false)
  }

  const reset = () => {
    stop()
    setText("")
    setError(null)
  }

  useEffect(() => {
    if (autoStart && url) {
      start()
    }

    return () => {
      controllerRef.current?.abort()
    }
  }, [url, autoStart])

  return {
    text,
    isLoading,
    error,
    start,
    stop,
    reset,
  }
}
