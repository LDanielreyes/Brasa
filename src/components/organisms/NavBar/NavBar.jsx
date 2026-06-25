import { Link } from 'react-router-dom'
import { Button } from '../../atoms/Button/Button'
import logo from '../../../assets/logos/01-wordmark-light.svg'
import './NavBar.css'

export function NavBar() {
  return (
    <nav className="organism-navbar">
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="Brasa Logo" />
      </Link>
      <div className="navbar-links">
        <Button variant="outline" onClick={() => document.getElementById('recipes')?.scrollIntoView({ behavior: 'smooth' })}>
          Recipes
        </Button>
      </div>
    </nav>
  )
}
