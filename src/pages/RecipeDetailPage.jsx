import { DetailTemplate } from '../components/templates/DetailTemplate/DetailTemplate'
import { RecipeDetailContent } from '../components/organisms/RecipeDetailContent/RecipeDetailContent'
import { Loader } from '../components/atoms/Loader/Loader'
import { ErrorMessage } from '../components/atoms/ErrorMessage/ErrorMessage'
import { useRecipeDetail } from '../hooks/useRecipeDetail'

export function RecipeDetailPage() {
  const { recipe, isLoading, error } = useRecipeDetail()

  return (
    <DetailTemplate>
      {isLoading && <Loader text="Cargando receta..." />}
      {error && <ErrorMessage message={error} />}
      {!isLoading && !error && recipe && <RecipeDetailContent recipe={recipe} />}
    </DetailTemplate>
  )
}
