const BASE_URL = import.meta.env.VITE_API_BASE_URL

export async function getCategories() {
  const res = await fetch(`${BASE_URL}/categories.php`)
  if (!res.ok) throw new Error('No se pudo cargar las categorías')
  const data = await res.json()
  return data.categories
}

export async function getRecipesByCategory(category) {
  const res = await fetch(`${BASE_URL}/filter.php?c=${category}`)
  if (!res.ok) throw new Error('No se pudo cargar las recetas')
  const data = await res.json()
  return data.meals || []
}

export async function searchRecipesByName(name) {
  const res = await fetch(`${BASE_URL}/search.php?s=${name}`)
  if (!res.ok) throw new Error('No se pudo realizar la búsqueda')
  const data = await res.json()
  return data.meals || []
}

export async function getRecipeById(id) {
  const res = await fetch(`${BASE_URL}/lookup.php?i=${id}`)
  if (!res.ok) throw new Error('No se pudo cargar la receta')
  const data = await res.json()
  return data.meals?.[0] || null
}

export async function getRandomMeal() {
  const res = await fetch(`${BASE_URL}/random.php`)
  if (!res.ok) throw new Error('No se pudo cargar la receta aleatoria')
  const data = await res.json()
  return data.meals?.[0] || null
}
