import { useState, useEffect, useCallback } from 'react'
import { getRandomMeal } from '../services/mealService'

const ROTATION_MS = 20000

export function useRandomMeal() {
  const [meal, setMeal] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchRandom = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {
      const data = await getRandomMeal()
      setMeal(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchRandom()
    const interval = setInterval(fetchRandom, ROTATION_MS)
    return () => clearInterval(interval)
  }, [fetchRandom])

  return { meal, isLoading, error, fetchRandom }
}
