import { useNavigate } from 'react-router-dom'
import { useRecipes } from '../../../hooks/useRecipes'
import { Button } from '../../atoms/Button/Button'
import { Loader } from '../../atoms/Loader/Loader'
import { ErrorMessage } from '../../atoms/ErrorMessage/ErrorMessage'
import { SearchBar } from '../../molecules/SearchBar/SearchBar'
import { RecipeListItem } from '../../molecules/RecipeListItem/RecipeListItem'
import './RecipeMenu.css'

export function RecipeMenu() {
  const {
    recipes,
    categories,
    selectedCategory,
    setSelectedCategory,
    searchTerm,
    setSearchTerm,
    isLoading,
    error,
  } = useRecipes()

  const navigate = useNavigate()

  return (
    <section className="organism-recipe-menu">
      <div className="recipe-menu-header">
        <h2 className="recipe-menu-title">RECIPES</h2>

        <div className="category-filter">
          {categories.map(cat => (
            <Button
              key={cat.idCategory}
              variant="pill"
              active={selectedCategory === cat.strCategory}
              onClick={() => {
                setSelectedCategory(cat.strCategory)
                setSearchTerm('')
              }}
            >
              {cat.strCategory}
            </Button>
          ))}
        </div>

        <div className="search-wrapper">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
        </div>
      </div>

      <article className="recipe-list">
        {isLoading && <Loader />}

        {error && <ErrorMessage message={error} />}

        {!isLoading && !error && recipes.length === 0 && (
          <p className="menu-status">No recipes found</p>
        )}

        {!isLoading && !error && recipes.length > 0 && (
          <>
            <p className="recipe-count">{recipes.length} recipes</p>
            <ul>
              {recipes.map(recipe => (
                <RecipeListItem
                  key={recipe.idMeal}
                  recipe={recipe}
                  onClick={() => navigate(`/recipe/${recipe.idMeal}`)}
                />
              ))}
            </ul>
          </>
        )}
      </article>
    </section>
  )
}
