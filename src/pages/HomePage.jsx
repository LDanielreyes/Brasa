import { HomeTemplate } from '../components/templates/HomeTemplate/HomeTemplate'
import { HeroContent } from '../components/organisms/HeroContent/HeroContent'
import { RecipeMenu } from '../components/organisms/RecipeMenu/RecipeMenu'
import { RandomRecipeCard } from '../components/organisms/RandomRecipeCard/RandomRecipeCard'

export function HomePage() {
  return (
    <HomeTemplate
      heroContent={<HeroContent />}
      recipeMenu={<RecipeMenu />}
      randomCard={<RandomRecipeCard />}
    />
  )
}
