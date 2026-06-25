import { useState, useEffect } from 'react'
import { getRecipeById } from '../services/mealService'

export function useRecipeDetail(id) {
  const [meal, setMeal] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [retryCount, setRetryCount] = useState(0)

  useEffect(() => {
    setIsLoading(true)
    setError(null)
    getRecipeById(id)
      .then(setMeal)
      .catch(err => setError(err.message))
      .finally(() => setIsLoading(false))
  }, [id, retryCount])

  const retry = () => setRetryCount(c => c + 1)

  return { meal, isLoading, error, retry }
}
