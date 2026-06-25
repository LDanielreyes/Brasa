import { useState, useEffect } from 'react'
import { getRecipeById } from '../services/mealService'
import { getIngredients, parseSteps } from '../utils/recipeUtils'

export function useRecipeDetail(id) {
  const [meal, setMeal] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [retryCount, setRetryCount] = useState(0)

  useEffect(() => {
    if (!id) return
    setIsLoading(true)
    setError(null)
    getRecipeById(id)
      .then(raw => {
        if (!raw) throw new Error('Receta no encontrada')
        setMeal({
          ...raw,
          ingredients: getIngredients(raw),
          instructions: parseSteps(raw.strInstructions),
        })
      })
      .catch(err => setError(err.message))
      .finally(() => setIsLoading(false))
  }, [id, retryCount])

  const retry = () => setRetryCount(c => c + 1)

  return { meal, isLoading, error, retry }
}
