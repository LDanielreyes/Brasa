import { Button } from '../../atoms/Button/Button'
import { FeatureItem } from '../../molecules/FeatureItem/FeatureItem'
import iconIngredients from '../../../assets/pictogramas/pic-05-ingredientes.svg'
import iconCollection from '../../../assets/pictogramas/pic-07-coleccion.svg'
import iconDiscover from '../../../assets/pictogramas/pic-08-descubrir.svg'
import './HeroContent.css'

export function HeroContent() {
  const scrollToRecipes = () => {
    document.getElementById('recipes')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <article className="organism-hero-content">
      <p className="hero-eyebrow">— Brasa —</p>

      <h1 className="hero-title">
        Cook <span className="title-accent">whatever<br />you crave.</span>
      </h1>

      <p className="hero-description">
        Type an ingredient, a dish, or a country. Brasa brings you the exact
        recipe from an archive of over 600 recipes.
      </p>

      <div className="hero-features">
        <FeatureItem iconSrc={iconIngredients} text="Ingredientes" />
        <span className="hero-divider" />
        <FeatureItem iconSrc={iconCollection} text="14 categorías" />
        <span className="hero-divider" />
        <FeatureItem iconSrc={iconDiscover} text="Receta aleatoria" />
      </div>

      <Button
        variant="icon"
        className="scroll-down-btn"
        onClick={scrollToRecipes}
        aria-label="Ver recetas"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </Button>
    </article>
  )
}
