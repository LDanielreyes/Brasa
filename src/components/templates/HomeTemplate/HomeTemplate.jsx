import PropTypes from 'prop-types'
import { NavBar } from '../../organisms/NavBar/NavBar'
import './HomeTemplate.css'

export function HomeTemplate({ heroContent, recipeMenu, randomCard }) {
  return (
    <div className="template-home">
      <NavBar />
      
      {heroContent}

      <section id="recipes" className="template-home-recipes">
        <div className="home-container">
          <div className="home-menu-col">
            {recipeMenu}
          </div>
          <div className="home-random-col">
            <div className="home-sticky-wrapper">
              {randomCard}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

HomeTemplate.propTypes = {
  heroContent: PropTypes.node.isRequired,
  recipeMenu: PropTypes.node.isRequired,
  randomCard: PropTypes.node.isRequired,
}
