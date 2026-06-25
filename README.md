# Brasas

Aplicación web interactiva para explorar recetas de cocina. Construida con React y la API pública de TheMealDB, aplicando principios rigurosos de Clean Code, escalabilidad y buenas prácticas de industria.

## Stack Tecnológico

- **React 19 + Vite 8** (Frontend veloz y moderno)
- **React Router v7** (Enrutamiento del lado del cliente)
- **CSS Vanilla (Custom Properties)** (Diseño responsivo sin dependencias de UI externas)
- **API:** [TheMealDB](https://www.themealdb.com/api.php)

## Configuración y Ejecución Local

1. **Clonar el repositorio:**
   ```bash
   git clone <url-del-repo>
   cd brasas-beta
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno:**
   Copia el archivo de ejemplo para crear tu entorno local:
   ```bash
   cp .env.example .env
   ```
   El archivo `.env` ya viene configurado con la URL correcta (`VITE_API_URL=https://www.themealdb.com/api/json/v1/1`). 

4. **Levantar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:5173](http://localhost:5173) en el navegador.

## Arquitectura: Atomic Design

La interfaz de la aplicación está estructurada siguiendo la metodología **Atomic Design** junto con **Colocation** (estilos agrupados junto a la lógica). Esto asegura que la aplicación sea altamente escalable, mantenible y libre de "componentes dios".

```
src/
├── assets/       # Imágenes, iconos SVG y logotipos
├── components/   # Arquitectura Atómica:
│   ├── atoms/      # Unidades base e indivisibles (Button, Loader, Icon, Thumbnail)
│   ├── molecules/  # Agrupaciones de átomos (SearchBar, RecipeListItem, IngredientItem)
│   ├── organisms/  # Secciones completas de UI (NavBar, HeroContent, RecipeMenu)
│   └── templates/  # Estructuras de layout (HomeTemplate, DetailTemplate)
├── hooks/        # Lógica de fetching y estados (useRecipes, useRandomMeal)
├── pages/        # Vistas que inyectan los organismos en los templates y se conectan al enrutador
├── services/     # Llamadas HTTP a la API externa
└── utils/        # Funciones puras de formateo o mapeo de datos
```

## Decisiones Técnicas y Buenas Prácticas

1. **Separación de Responsabilidades (Custom Hooks):** Toda la lógica de obtención de datos vive en la carpeta `hooks/`. Los componentes de React se limitan únicamente a renderizar la interfaz en base a los estados que el hook les devuelve, manteniéndolos limpios y predecibles.
2. **Patrón Loading / Error / Success:** Las peticiones asíncronas no asumen resultados perfectos. Los hooks exponen los estados de carga y error, y la interfaz reacciona preventivamente mostrando componentes dedicados (`<Loader />` y `<ErrorMessage />`) usando Conditional Rendering.
3. **Colocación Estricta (Colocation):** El archivo `.css` de cada componente vive en la misma carpeta que su `.jsx` correspondiente. Al eliminar un componente, sus estilos se eliminan con él, impidiendo la acumulación de código muerto.
4. **CSS Moderno y Responsivo:** 
   - Uso de `clamp()` para tipografías verdaderamente fluidas que se adaptan a cualquier resolución sin sobrecargar el código de `@media queries`.
   - Implementación estricta de variables (`:root`) para manejar los colores de la aplicación, facilitando una futura implementación de "Modo Oscuro".
   - Micro-animaciones con `transform` y `transition` que otorgan una sensación premium al usuario.
5. **Seguridad y Entorno:** La URL base de la API no está *hardcodeada* en el servicio, sino que es leída desde variables de entorno.
6. **Manejo del DOM Virtual (Prop `key`):** Se asegura una óptima eficiencia de renderizado utilizando el ID exacto de la base de datos de recetas (`idMeal`) al mapear listas.
7. **Debounce en Búsqueda:** La barra de búsqueda cuenta con un retraso intencional para no saturar la API con una solicitud cada vez que se presiona una tecla.

