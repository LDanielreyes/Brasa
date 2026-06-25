import PropTypes from 'prop-types'
import { NavBar } from '../../organisms/NavBar/NavBar'
import { Button } from '../../atoms/Button/Button'
import { useNavigate } from 'react-router-dom'
import './DetailTemplate.css'

export function DetailTemplate({ children }) {
  const navigate = useNavigate()

  return (
    <div className="template-detail">
      <NavBar />
      
      <main className="detail-main-content">
        <div className="detail-back-nav">
          <Button variant="outline" onClick={() => navigate(-1)}>
            &larr; Volver
          </Button>
        </div>
        
        <div className="detail-container">
          {children}
        </div>
      </main>
    </div>
  )
}

DetailTemplate.propTypes = {
  children: PropTypes.node.isRequired,
}
