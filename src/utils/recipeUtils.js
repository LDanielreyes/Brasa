// Extrae la lista de ingredientes con sus medidas desde los campos planos de la API
export function getIngredients(meal) {
  const list = []
  for (let i = 1; i <= 20; i++) {
    const name = meal[`strIngredient${i}`]
    const measure = meal[`strMeasure${i}`]
    if (name?.trim()) {
      list.push({ name: name.trim(), measure: measure?.trim() || '' })
    }
  }
  return list
}

// Convierte el bloque de texto de instrucciones en un array de pasos
export function parseSteps(text) {
  if (!text) return []
  return text
    .split(/\r?\n/)
    .map(s => s.trim())
    .filter(s => s.length > 10)
}
