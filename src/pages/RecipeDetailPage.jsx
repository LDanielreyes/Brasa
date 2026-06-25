import { useParams } from 'react-router-dom'
import { DetailTemplate } from '../components/templates/DetailTemplate/DetailTemplate'
import { RecipeDetailContent } from '../components/organisms/RecipeDetailContent/RecipeDetailContent'
import { Loader } from '../components/atoms/Loader/Loader'
import { ErrorMessage } from '../components/atoms/ErrorMessage/ErrorMessage'
import { useRecipeDetail } from '../hooks/useRecipeDetail'

export function RecipeDetailPage() {
  const { id } = useParams()
  const { meal: recipe, isLoading, error } = useRecipeDetail(id)

  return (
    <DetailTemplate>
      {isLoading && <Loader text="Cargando receta..." />}
      {error && <ErrorMessage message={error} />}
      {!isLoading && !error && recipe && <RecipeDetailContent recipe={recipe} />}
    </DetailTemplate>
  )
}
