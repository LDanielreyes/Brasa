import { useState, useEffect } from 'react'
import { getCategories, getRecipesByCategory, searchRecipesByName } from '../services/mealService'

export function useRecipes() {
  const [recipes, setRecipes] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('Dessert')
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getCategories()
      .then(setCategories)
      .catch(err => console.error(err.message))
  }, [])

  // Carga por categoría cuando no hay búsqueda activa
  useEffect(() => {
    if (searchTerm.trim() !== '') return

    setIsLoading(true)
    setError(null)
    getRecipesByCategory(selectedCategory)
      .then(setRecipes)
      .catch(err => setError(err.message))
      .finally(() => setIsLoading(false))
  }, [selectedCategory, searchTerm])

  // Búsqueda por nombre con debounce
  useEffect(() => {
    if (searchTerm.trim() === '') return

    setIsLoading(true)
    const timeout = setTimeout(() => {
      setError(null)
      searchRecipesByName(searchTerm)
        .then(setRecipes)
        .catch(err => setError(err.message))
        .finally(() => setIsLoading(false))
    }, 500)

    return () => clearTimeout(timeout)
  }, [searchTerm])

  return {
    recipes,
    categories,
    selectedCategory,
    setSelectedCategory,
    searchTerm,
    setSearchTerm,
    isLoading,
    error,
  }
}
