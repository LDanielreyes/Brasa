# Brasas

Aplicación web para explorar recetas construida con React y la API pública de TheMealDB.

## Stack

- React 19 + Vite 8
- React Router v7
- CSS vanilla con custom properties
- API: [TheMealDB](https://www.themealdb.com/api.php)

## Configuración y ejecución local

1. Clonar el repositorio

   ```bash
   git clone <url-del-repo>
   cd brasas-beta
   ```

2. Instalar dependencias

   ```bash
   npm install
   ```

3. Configurar variables de entorno

   ```bash
   cp .env.example .env
   ```

   El `.env` ya viene con la URL correcta. Si la API cambia de versión, edita `VITE_API_BASE_URL`.

4. Levantar el servidor de desarrollo

   ```bash
   npm run dev
   ```

   Abre [http://localhost:5173](http://localhost:5173) en el navegador.

## Estructura del proyecto

```
src/
├── components/   # Componentes reutilizables de UI
├── hooks/        # Custom hooks — lógica de fetching separada de la interfaz
├── pages/        # Vistas asociadas a rutas
├── services/     # Comunicación con la API (un solo lugar para los fetch)
├── styles/       # CSS por componente
└── utils/        # Funciones puras de transformación de datos
```

## Decisiones técnicas

**Custom hooks por feature** — cada sección que consume datos tiene su propio hook (`useRecipes`, `useRandomMeal`, `useRecipeDetail`). Esto mantiene los componentes limpios y facilita reutilizar la lógica si la UI cambia.

**mealService.js como capa de servicio** — todos los `fetch` viven en un mismo archivo. Si la API cambia de endpoint o de versión, solo hay que tocar ese archivo.

**React Router para la navegación** — al seleccionar una receta el usuario navega a `/recipe/:id`, lo que permite compartir URLs directas a recetas específicas.

**Variables de entorno** — la URL base de la API está en `.env` para no hardcodear valores en el código fuente.

**PropTypes** — los componentes que reciben props las validan con PropTypes para detectar errores de tipo en desarrollo.

## Posibles mejoras

- Paginación o scroll infinito en el listado (la API no expone paginación, habría que implementarla en cliente)
- Favoritos guardados en localStorage
- Filtros combinados: área geográfica + categoría
- Tests unitarios para los custom hooks y las funciones de utils
- Migración a TypeScript
- Lazy loading de imágenes en la lista de recetas
