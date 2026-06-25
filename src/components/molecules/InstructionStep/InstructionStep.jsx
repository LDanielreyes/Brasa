import PropTypes from 'prop-types'
import './InstructionStep.css'

export function InstructionStep({ stepNumber, text }) {
  return (
    <div className="molecule-instruction-step">
      <div className="molecule-step-number">{stepNumber}</div>
      <p className="molecule-step-text">{text}</p>
    </div>
  )
}

InstructionStep.propTypes = {
  stepNumber: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
}
