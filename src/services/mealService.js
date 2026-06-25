const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://www.themealdb.com/api/json/v1/1'

export async function getCategories() {
  const res = await fetch(`${BASE_URL}/categories.php`)
  if (!res.ok) throw new Error('Failed to load categories')
  const data = await res.json()
  return data.categories
}

export async function getRecipesByCategory(category) {
  const res = await fetch(`${BASE_URL}/filter.php?c=${category}`)
  if (!res.ok) throw new Error('Failed to load recipes')
  const data = await res.json()
  return data.meals || []
}

export async function searchRecipesByName(name) {
  const res = await fetch(`${BASE_URL}/search.php?s=${name}`)
  if (!res.ok) throw new Error('Search failed')
  const data = await res.json()
  return data.meals || []
}

export async function getRecipeById(id) {
  const res = await fetch(`${BASE_URL}/lookup.php?i=${id}`)
  if (!res.ok) throw new Error('Failed to load recipe')
  const data = await res.json()
  return data.meals?.[0] || null
}

export async function getRandomMeal() {
  const res = await fetch(`${BASE_URL}/random.php`)
  if (!res.ok) throw new Error('Failed to load random recipe')
  const data = await res.json()
  return data.meals?.[0] || null
}
