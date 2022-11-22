---
title: useFetch
date: Nov 14, 2019
description: Simple hook to do simple fetching
---

A simple hook to fetch some data when you're not using some kind of external library like axios or React query.

```javascript
import { useState, useEffect } from "react"

export interface FetchData {
  response: any
  error: any
  isLoading: boolean
}

export const useFetch = (url: string): FetchData => {
  const [response, setResponse] = useState<any>(null)
  const [error, setError] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!url) return

    const fetchData: () => Promise<any> = async () => {
      if (!url) return

      setIsLoading(true)
      try {
        const res = await fetch(url)

        // Throw error if not ok response.
        if (!res.ok) throw new Error(res.status + " " + res.statusText)

        const json = await res.json()
        setResponse(json)
        setIsLoading(false)
      } catch (error) {
        console.warn("Failed to fetch from url: " + url + ". Error: " + error)
        setIsLoading(false)
        setError(error)
      }
    }

    fetchData()
  }, [url])

  return { response, error, isLoading }
}
```
